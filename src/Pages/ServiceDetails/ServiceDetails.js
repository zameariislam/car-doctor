import React from 'react';
import { useParams, Link  } from 'react-router-dom';
const ServiceDetails = () => {
    let { serviceId } = useParams();
    return (
        <div>
        <h2>Welcome to Details</h2>
      

       <div className='text-center'>
       <Link to='/checkout'><button className='btn btn-primary'>Proceed CheckOut</button></Link>
       </div>
           
        
            
        </div>
    );
};

export default ServiceDetails;