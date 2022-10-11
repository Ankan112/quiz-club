import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2 className='mt-3'>Choose Your Topics</h2>
            <div className="quiz">
                {
                    data.data.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;