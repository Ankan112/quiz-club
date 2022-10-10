import React from 'react';
import './Blog.css'
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='blog'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the purpose of React Router?</Accordion.Header>
                    <Accordion.Body>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How does context work?</Accordion.Header>
                    <Accordion.Body>
                        Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why do we use useRef in React?</Accordion.Header>
                    <Accordion.Body>
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;