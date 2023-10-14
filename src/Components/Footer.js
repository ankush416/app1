import React from 'react';
//import './Footer.css'; // Import your custom styling
import '../css/style.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <p>&copy; 2023 eLearning</p>
        <ul className='footer-links'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/courses'>Courses</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
