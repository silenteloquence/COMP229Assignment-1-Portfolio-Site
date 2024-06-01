/* 
File Name: Navbar
Student's Name: Talgat Dilmurat 
StudentID: 301307854
Date: May 31, 2024 
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <img src="/logo.png" alt="Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
