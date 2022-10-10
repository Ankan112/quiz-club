import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Header></Header>
            <h2>This is quiz {data.data.length}</h2>
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

export default Home;