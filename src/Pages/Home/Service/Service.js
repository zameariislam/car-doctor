import React from 'react';
import './Service.css'
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const{name,img,description,price,id}=service;
    const navigate=useNavigate()

    const navigateToServiceDetails=(id)=>{
        navigate(`/service/${id}`)
       

    }

    return (
        <div className='service'>
            
            <img  className='w-100'   src={img} alt="" />
            <h2>{name}</h2>
            <p> Price:{price}</p>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetails(id)} className='btn btn-primary'>book:{name}</button>
            
        </div>
    );
};

export default Service;