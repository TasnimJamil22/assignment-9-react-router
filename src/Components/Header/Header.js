import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>Supper Learning</h3>
            <div className='header-container'>
             
             <Link className='header-link' to ='/home'>Home</Link>
             <Link className='header-link' to ='/about'>About Us</Link>
             <Link className='header-link' to ='/services'>Services</Link>
             <Link className='header-link' to ='/help'>Help</Link>
         </div>
        </div>
    );
};

export default Header;