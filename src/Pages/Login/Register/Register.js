import React, { useState } from 'react';
import './Register.css'
import { Link,useNavigate, } from "react-router-dom";
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const[agree,setAgree]=useState(false)

    const navigateLogin = () =>{
        navigate('/login');
    }
    if(loading||updating){
        return <Loading/>
    }

  
    const handleRegister =async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree=event.target.terms.checked;
       
           await createUserWithEmailAndPassword(email, password);
           await updateProfile({ displayName:name });
           alert('Updated profile');

           navigate('/home');
           
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label  className={agree?'ps-2':'text-danger'} htmlFor="terms">
                    Accept terms and conditions
                </label> */}

                <label className={`ps-2 ${agree?'':'text-danger'}`}  htmlFor="terms">
                    Accept terms and conditions
                </label>
                <input 
                 disabled={!agree}
                className='btn btn-primary w-50 d-block mx-auto mt-2 '
                 type="submit" 
                 value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
            
             </p>

             <SocialLogin/>
        </div>

    );
};

export default Register;