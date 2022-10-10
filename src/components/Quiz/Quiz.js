import React from 'react';
import './Quiz.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Quiz = ({ quiz }) => {
    const { name, logo, total, id } = quiz
    return (
        <Card className='card'>
            <Card.Img variant="top" className='img' src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Total Quiz {total}</p>
                <Link to={`/quiz/${id}`}><Button className='btn' variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Quiz;