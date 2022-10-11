// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// const Toast = () => {
//     const notify = () => toast("Wow so easy !");
//     return (
//         <div>
//             <button onClick={notify}>Notify !</button>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//             />
//             {/* Same as */}
//             <ToastContainer />
//         </div>
//     );
// };

// export default Toast;



import Toast from 'react-bootstrap/Toast';

function ContextualExample() {
    return (
        <>
            {[

                'Success',


            ].map((variant, idx) => (
                <Toast
                    className="d-inline-block m-1"
                    bg={variant.toLowerCase()}
                    key={idx}
                >

                    <Toast.Body style={{ color: 'white' }} className={variant === 'Dark' && 'text-white'}>
                        Your Answer is Correct.
                    </Toast.Body>
                </Toast>
            ))}
        </>
    );
}

export default ContextualExample;