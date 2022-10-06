import React from 'react'
import swimer from '../images/card/swim.png'
import { FaStar } from 'react-icons/fa'
const Card = () => {
  return (
    <div className="card--container">
      <img src={swimer} alt="Swimmer" className="card--img" />
      <p className="card-tag">SOLD OUT</p>
      <p>
        {<FaStar style={{ color: '#FE395C', fontSize: '15px' }} />} 5.0{' '}
        <span className='card-coutnry'>(6) &#8226; USA</span>
      </p>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className='card-price'>From $136 /</span> person
      </p>
    </div>
  )
}

export default Card
