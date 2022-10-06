import React from 'react'
import swimer from '../images/card/swim.png'
import { FaStar } from 'react-icons/fa'
const Card = (props) => {
  return (
    <div className="card--container">
      <img src={swimer} alt="Swimmer" className="card--img" />
      <p className="card-tag">{props.tag}</p>
      <p>
        {<FaStar style={{ color: '#FE395C', fontSize: '15px' }} />} {props.rate}{' '}
        <span className='card-coutnry'>(6) &#8226; {props.country}</span>
      </p>
      <p>{props.host}</p>
      <p>
        <span className='card-price'>From ${props.price} /</span> person
      </p>
    </div>
  )
}

export default Card
