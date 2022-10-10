import React, { useState } from 'react';
import './Question.css'

const Question = ({ singleQuestion }) => {
    const { question, options, correctAnswer } = singleQuestion
    const [value, setValue] = useState('')
    const handleInput = (e) => {
        const getValue = (e.target.value);
        setValue(getValue)
        // if (value === correctAnswer) {
        //     alert('your right')
        // }
    }
    return (
        <div className='question'>
            <h5>{question}</h5>
            {
                options.map(singleOption => <div
                    key={singleOption}
                >
                    <input type="radio" onChange={handleInput} name='question' value={singleOption} /><label htmlFor="">{singleOption}</label>

                </div>)
            }
            {
                value === correctAnswer ? <p>Your answer is Correct </p> : ''
            }
        </div>
    );
};

export default Question;