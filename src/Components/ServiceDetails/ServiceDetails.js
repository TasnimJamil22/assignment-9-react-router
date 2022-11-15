import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id} = useParams();
    // const [serviceDetails,setServiceDetails] = useState({});

    // useEffect(()=>{
        
    //     fetch(`services.json/${id}`)
    //     .then(res => res.json())
    //     .then(data => setServiceDetails(data))
    // },[])
    return (
        <div>
            <h4>This is service id: {id}</h4>
            {/* <h3>Name:{serviceDetails.name} </h3> */}
        </div>
    );
};

export default ServiceDetails;