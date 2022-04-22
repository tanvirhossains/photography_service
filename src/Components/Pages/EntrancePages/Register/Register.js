import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()


    const goToLogin = () => {
        navigate('/login')
    }
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-primary text-center mt-2'>Sign up an account !!!!!</h2>

            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <p className='text-danger'> </p>
                </Form.Group>
                <p>Have an account? <span onClick={goToLogin} className='text-primary'>Log in </span></p>
                <Button className='mx-auto d-block w-50' variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>

        </div>
    );
};

export default Register;