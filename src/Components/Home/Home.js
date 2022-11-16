import React, { useEffect, useState } from 'react'; 
import img1 from './wrtiting-tools.jpg';
import img2 from './learning.jpg';
import img3 from './360_F_444963293_Q4ZmPKrt2Cy1GytDACOR7aTijgtMW3rZ.jpg';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data =>  setServices(data))
},[])
  const topServices = services.slice(2,6);

    return (
        <div>
              
               {/* Banner */}
               <>
               <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src= {img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
               </>

               {/* services  */}

               <div className='container mx-auto'>
                  <h3 className='text-primary mx-auto py-2'>Our Latest Services:</h3>
                  <div className='row  mx-auto'>
                    {
                      
                      topServices.map( service => <Service
                        key={service.id}
                        service={service}
                        
                        ></Service>)
                    }
                  </div>
                   

               </div>

               

             {/* 1.css framework
            2. 4 routes (navigation ---home,about,....)
            3. header & footer still in all page
            4. 404 page
            5. 4 services in home page related to our website, price, name,img
            6. nice name of website wish to use icon
            7. service fake data 4
            8.  4 routes without / , services route with more services
            9. for bonus: read me file edit , in extra page do something,          responsive , context api , dynamic route  */}
            {/* <div>
                   <img src={img1} alt="" />
            </div> */}


        </div>
    );
};

export default Home;

