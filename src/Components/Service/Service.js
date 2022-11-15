import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id,name,price,img} = props.service;
    return (
         
          <div className='col-lg-4  col-sm-6 col-12   border rounded-2 mx-2  mr-2  ml-2 py-2 mx-autonp'  style={{height:"550px" , width:"400px"}}>
               
              <img  className=' rounded-3 p-1' src={img} alt="" />
              <h4>{name}</h4>
              <p>description:Some quick example <br/>
               text to build on the card <br></br>
               title and make up the <br />
                bulk of the card's content.</p>
              <strong>price:{price}</strong><br /><br />
               
              {/* <Button variant="primary mb-4">Add to cart</Button>  */}
               
              <Link to= {`/service-details/${id}`} className='bg-primary  text-light text-decoration-none border rounded-2 p-2 mb-5' >View details</Link>
               
               
               
        </div>
         
    );
};

export default Service;