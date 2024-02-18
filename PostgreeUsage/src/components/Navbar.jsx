import React from 'react';
import { Link } from 'react-router-dom';
import ham from '../assets/ham.png'
import './style.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <ul className='logo'>
        LOGO
    </ul>
        
      <ul className='nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link> {/* Optional */}
        </li>
      </ul>
      <ul className="ham">
            <img src={ham} alt="" />
        </ul>
    </nav>
  );
};

export default Navbar;
