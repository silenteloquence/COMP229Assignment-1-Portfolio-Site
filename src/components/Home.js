/* 
File Name: Home
Student's Name: Talgat Dilmurat 
StudentID: 301307854
Date: May 31, 2024 
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Your efficient Programming assistant</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
}

export default Home;
