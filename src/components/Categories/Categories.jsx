import React from 'react'
import './categories.css'
import Card from '../Card/Card'
const Categories = () => {
  return (
    <>
      <div className='category-container'>
        <h1>Our Categories</h1>
      </div>
      <div className='grid-container'>
        <div className='cards'>
          <Card desc="Assembly Gloves"/>
          <Card desc="TPR Gloves"/>
          <Card desc="Welding Gloves"/>
        </div>
        <div className='cards1'>
          <Card desc="Candion Gloves"/>
          <Card desc="Driving Gloves"/>

        </div>
      </div>
      
    </>
  )
}

export default Categories