import React from 'react';
import Toast from 'react-bootstrap/Toast';

const DangerToast = () => {
    return (
        <>
            {[

                'danger',


            ].map((variant, idx) => (
                <Toast
                    className="d-inline-block m-1"
                    bg={variant.toLowerCase()}
                    key={idx}
                >

                    <Toast.Body style={{ color: 'white' }} className={variant === 'Dark' && 'text-white'}>
                        Your Answer is Wrong.
                    </Toast.Body>
                </Toast>
            ))}
        </>
    );
};

export default DangerToast;