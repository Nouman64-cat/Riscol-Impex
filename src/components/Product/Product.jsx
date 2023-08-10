import React from 'react'
import './product.css'
import semantic from '../../assets/semantic-HTML.png'
const Product = ({line}) => {
  return (
    <div className='product-box'>

        <img src={semantic} alt="nouman" className='larki-image' />
        <h2>Product Name</h2>
        <p>{line}</p>
    </div>
  )
}

export default Product