import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer-section'>
    <div className='footer-container'>
      <div className="footer-card">
        <h1>Riscol Impex</h1>
        <p>Columbus made three further voyages to the Americas, exploring the Lesser Antilles in 1493, Trinidad and the northern coast of South America in 1498</p>
        <p>the east coast of Central America in 1502. Many names he gave to geographical features, particularly islands, are still in use.</p>
      </div>
      <div className='footer-link-grid'>
        <div className='links'>
          <h1>Use full links</h1>
          <p>&gt; Home</p>
          <p>&gt; About us</p>
          <p>&gt; Product</p>
          <p>&gt; Inquiry</p>
          <p>&gt; Site map</p>
          <p>&gt; Contact us</p>
        </div>
        <div className='links'>
          <h1>Categories</h1>
          <p>&gt; Candion Glove</p>
          <p>&gt; Assembly Gloves</p>
          <p>&gt; Welding Gloves</p>
          <p>&gt; Driving Gloves</p>
          <p>&gt; TPR Gloves</p>
        </div>
        <div className='links'>
          <h1>Contact us</h1>
          <p>+92-300-62
      39327 / +92-300-8908136</p>
          <p>info@riscolimpex.com</p>
          <p>www.riscolimpex.com</p>
        </div>
      </div>
    </div>
    <p className='copyrights'>Copyrights &copy; 2023 All rights reserved Web Designed & Developed by Web Excels</p>
    </div>
  )
}

export default Footer