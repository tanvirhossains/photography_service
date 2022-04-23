import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorValue
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        createUserWithEmailAndPassword(email, password)
        navigate('/home')
    }


    if (user) {

    }
    if (error) {
        errorValue = <p>Error: {error.message}</p>
    }
    const turnToLogin = () => {
        navigate('/login')
    }
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-primary text-center mt-2'>Sign up an account !!!!!</h2>

            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    <p className='text-danger'> </p>
                </Form.Group>

                <h3 className='text-danger'>{errorValue}</h3>
                <p>Have an account or not? <span onClick={turnToLogin} className='text-primary'>Log in </span></p>
                <Button className='mx-auto d-block w-50' variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>

        </div>
    );
    // 
    //     return (
    //         <div className="App">
    //             <input
    //                 type="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //             />
    //             <input
    //                 type="password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //             />
    //             <button onClick={() => createUserWithEmailAndPassword(email, password)}>
    //                 Register
    //             </button>
    //         </div>
    //     );
    // };
};

export default Register;