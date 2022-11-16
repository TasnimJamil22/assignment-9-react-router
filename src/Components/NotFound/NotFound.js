import React from 'react'; 
import img from './notfouond.png';

const NotFound = () => {
    return (
        <div>
             <img className='p-5 m-5' style={{width:"500px", height:"500px"}} src= {img} alt="" />
        </div>
    );
};

export default NotFound;