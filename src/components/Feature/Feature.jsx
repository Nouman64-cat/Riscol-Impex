import React from 'react'
import './Feature.css'
import Product from '../Product/Product'
const Feature = () => {
  return (
    <div className='feature-container'>
      <h1>Feature Products</h1>
      <div className='product-grid'>
        <Product line="Art &#35;1001"/>
        <Product line="Art &#35;1001"/>
        <Product line="Art &#35;1001"/>
        <Product line="Art &#35;1001"/>
      </div>
    </div>
  )
}

export default Feature