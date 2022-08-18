import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'


const SocialLogin = () => {
    return (
         <div>
            <div className='d-flex  align-items-center'>
            <div style={{height:'1px'}} className='w-50 bg-dark'></div>
            <p className='mt-2 px-2'>OR</p>
            <div style={{height:'1px'}} className='w-50 bg-dark'></div>
            
        </div>

        <div >
            <button className='btn btn-primary w-50  d-block mx-auto my-2' >
                <img src={google} alt="" /> <span className='px-2'>Google Sign In</span>
               </button>
               <button className='btn btn-primary w-50  d-block mx-auto my-2' >
                <img style={{width:'30px'}} src={google} alt="" /> <span className='px-2'>Facebook</span>
               </button>
               <button className='btn btn-primary w-50  d-block mx-auto my-2' >
                <img style={{width:'30px'}} src={facebook} alt="" /> <span className='px-2'>Github</span>
               </button>
              
             

        </div>
        
         </div>
        
    );
};

export default SocialLogin;