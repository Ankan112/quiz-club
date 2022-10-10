import React from 'react';
import './Quiz.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Quiz = ({ quiz }) => {
    const { name, logo, total } = quiz
    return (
        <Card className='card'>
            <Card.Img variant="top" className='img' src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Total Quiz {total}</p>
                <Button className='btn' variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Quiz;