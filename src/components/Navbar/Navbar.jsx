import React from 'react'
import './navbar.css'
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedin, FaDribbble, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { MdPhone, MdEmail, MdLanguage } from 'react-icons/md';
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className='navbar-parallelogram'>
        <div className="navbar-icons">
      <a href="https://www.facebook.com">
        <FaFacebook className="icon" />
      </a>
      <a href="https://mail.google.com">
        <FaGoogle className="icon" />
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter className="icon" />
      </a>
      <a href="https://www.linkedin.com">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.dribbble.com">
        <FaDribbble className="icon" />
      </a>
    </div>
        <div className='navbar-parallelogram-text'>
          <h3>Welcome to Riscol Impex</h3>
        </div>
        
      </div>
      <div className="navbar-contact">
        <div className="navbar-contact1">
           <MdPhone className="icon phone-icon" />
            <p>+92-300-62
      39327 / +92-300-8908136</p>
        </div>
        <div className="navbar-contact1">
          
      <MdEmail className="icon email-icon" />
      <p>info@riscolimpex.com</p>
        </div>
        <div className="navbar-contact1">
           
      <MdLanguage className="icon internet-icon" />
      <p>www.riscolimpex.com</p>
        </div>
      </div>
      <div className="navbar-links">
        <h1>Riscol Impex</h1>
        <div className='navbar-links-pages'>
          <p>Home</p>
          <p>About us</p>
          <p>Products</p>
          <p>Inquiry</p>
          <p>Site map</p>
          <p>Contact us</p>
          <FaShoppingCart className="icon shopping-icon" />
      <FaSearch className="icon search-icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar