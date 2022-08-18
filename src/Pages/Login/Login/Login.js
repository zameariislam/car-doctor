import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate} from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const handleSubmit=(e)=>{

        e.preventDefault();
        const email=(emailRef.current.value)
        const password=(passwordRef.current.value)


    }

    const navigateRegister=()=>{
        navigate('/register')

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2' >Please Log in here</h2>

            <Form onSubmit={ handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>New to Car doctor? <span onClick={navigateRegister} className='text-danger'>Please Register</span> </p>
        </div>
    );
};

export default Login;