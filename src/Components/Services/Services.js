import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>  setServices(data))
    },[])
    return (
        <div className='container '>
             
            <h3 className='text-primary '>The excellent & effective way to learn a language!</h3>
            <div className='row  mx-auto'>
            {
                services.map(service=> <Service
                key={service.id}
                service = {service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;