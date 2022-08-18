import React from 'react';
import { useParams } from 'react-router-dom';
const ServiceDetails = () => {
    let { serviceId } = useParams();
    return (
        <div>
        <h2>Welcome to Details</h2>
        id:{serviceId}

            
        </div>
    );
};

export default ServiceDetails;