import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import auth from '../../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );


    let errorValue;
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()


    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
      
    }
    if (error ) {
        errorValue = <p>Error:  {error.message}</p>
    }

    const goToRegister = () => {
        navigate('/register')
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value

        if (email) {
            await sendPasswordResetEmail(email)
            toast('password reset, check your email please')
        }
        
        else {
            toast('enter your email')
        }
    }
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-primary text-center mt-2'>Log in please!!!!!</h2>

            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    
                    <h4 className='text-danger'> {errorValue} </h4>
                </Form.Group>
                <p>If you are new? <span onClick={goToRegister} className='text-primary'>Sign up </span></p>
                <p>Forget password? <span onClick={handleResetPassword} className='text-primary'>Reset password </span></p>
                <ToastContainer />
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;