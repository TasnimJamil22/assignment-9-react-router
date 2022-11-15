import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import img from './logo-removebg-preview.png';

const Header = () => {
    return (
        <div>


<nav class="navbar navbar-dark navbar-expand-sm bg-dark justify-content-center">
    
  <ul class="navbar-nav">
  <div className='d-flex '>
        <img style={{height:'60px', width:'80px'}} src={img} alt="" />
        <h2 className='text-light'>Supper Learning</h2>
    </div>
    <li class="nav-item">
      <Link class="nav-link" to="/home">Home</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/about">About</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link"to="/services">Services</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link"to="/help">Help</Link>
    </li>
  </ul>
</nav>
            

            

             

            




            {/* <div className='header-container'>
             
             <Link   to ='/home'>Home</Link>
             <Link className=' ' to ='/about'>About Us</Link>
             <Link className=' ' to ='/services'>Services</Link>
             <Link className=' ' to ='/help'>Help</Link>
         </div> */}
        </div>
    );
};

export default Header;