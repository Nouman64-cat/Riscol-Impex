import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import semantic from './assets/semantic-HTML.png'
import './App.css'
import Categories from './components/Categories/Categories'
import Feature from './components/Feature/Feature'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bren-image-container">
        {/* <img src={bren} alt='bren' className='bren-image' /> */}
        <div className="headings-gloves">
        <h1>Mechanic Gloves</h1>
        <p className='hight-quality'>High Quality Gloves</p>
        <button type="button">
          <p className='notSkewed'>Read More</p>
        </button>
        </div>
        <img src={semantic} alt='larki'  className='larki'/>
      </div>
      <About />
      <Categories />
      <Feature />
      <Footer />
    </div>
  )
}

export default App