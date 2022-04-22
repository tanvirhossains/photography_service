import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const goToRegister = () => {
        navigate('/register')
    }


    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-primary text-center mt-2'>Log in please!!!!!</h2>

            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <p className='text-danger'> </p>
                </Form.Group>

                <p>If you are new? <span onClick={goToRegister} className='text-primary'>Sign up </span></p>
                <p>Forget password? <span className='text-primary'>Reset password </span></p>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;