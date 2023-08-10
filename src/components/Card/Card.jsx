import React from 'react'
import './card.css'
const Card = ({desc}) => {
  return (
    <div className='card-container'>
      <button type='button'>
        <p>{desc}</p>
      </button>
    </div>
  )
}

export default Card