import React, { useState } from 'react';
import Toast from '../Toast/Toast';
import './Question.css'
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import DangerToast from '../DangerToast/DangerToast';

const Question = ({ singleQuestion }) => {
    console.log(singleQuestion)
    const { question, options, correctAnswer } = singleQuestion
    const [value, setValue] = useState('')
    const handleInput = (e) => {
        const getValue = (e.target.value);
        setValue(getValue);
    }
    const renderTooltip = props => (
        <Tooltip {...props}>{correctAnswer}</Tooltip>
    );
    return (
        <div className='question'>
            <h4> {question}</h4>
            <div className='option'>
                {
                    options.map(singleOption => <div
                        key={singleOption}
                    >
                        <div className="options">
                            <input type="radio" className='input' onChange={handleInput} name='question' value={singleOption} /><label htmlFor="">{singleOption}</label>
                        </div>

                    </div>)
                }
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                    <img className="icon" src="https://img.icons8.com/external-others-inmotus-design/40/000000/external-View-basic-functions-others-inmotus-design.png" alt='' />
                </OverlayTrigger>
                {
                    value === correctAnswer ?
                        <Toast></Toast>
                        :
                        // <DangerToast></DangerToast>
                        ''

                }
                {
                    value !== '' && value !== correctAnswer ?
                        <DangerToast></DangerToast>
                        :
                        ''
                }

            </div>

        </div>
    );
};

export default Question;