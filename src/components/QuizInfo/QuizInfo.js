import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizInfo.css'

const QuizInfo = () => {
    const data = useLoaderData();
    console.log(data.data.questions)
    return (
        <div>
            <h2>Quiz info {data.data.name}</h2>
            <div>
                {
                    data.data.questions.map(singleQuestion => <Question
                        key={singleQuestion.id}
                        singleQuestion={singleQuestion}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizInfo;