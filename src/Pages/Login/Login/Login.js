import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useNavigate,Link,useLocation} from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const handleSubmit=(e)=>{

        e.preventDefault();
        const email=(emailRef.current.value)
        const password=(passwordRef.current.value)
        signInWithEmailAndPassword(email, password)
        if(user){
            navigate(from, { replace: true });

        }
      

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

            <p>New to Car doctor? <Link  className='text-decoration-none text-danger' to='/register'>Please Register</Link> </p>
        </div>
    );
};

export default Login;