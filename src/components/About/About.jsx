import React from 'react'
import './about.css'
import blog from '../../assets/blog.jpg'
const About = () => {
  return (
    <div className='about-container'>
      <div className='about-bar'>

        </div>
      
      
      <div className="about-card">
        <div className='about-image'>
        <div className='about-bar1'>
        </div>
        <img src={blog} alt='blog' className='blog-image'/>
      </div>
        <div className="about-text">
          <h1>About us</h1>
          <p>Columbus made three further voyages to the Americas, exploring the Lesser Antilles in 1493, Trinidad and the northern coast of South America in 1498, and the east coast of Central America in 1502. Many names he gave to geographical features, particularly islands, are still in use.
</p>
<p>Columbus's expeditions inaugurated a period of exploration, conquest. The transfer of commodities, ideas, and people between the Old World and New World that followed his first voyage are known as the Columbian exchange. These events and the effects which persist to the present are often cited as the beginning of the modern era</p>
        </div>
      </div>
    </div>
  )
}

export default About