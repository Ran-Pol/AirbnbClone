import React from 'react'
import { FaStar } from 'react-icons/fa'
const Card = (props) => {
    const image = require(`../images/card/${props.img}`); 
  return (
    <div className="card--container">
      <img src={image} alt="Swimmer" className="card--img" />
      <p className="card-tag">{props.tag}</p>
      <p>
        {<FaStar style={{ color: '#FE395C', fontSize: '15px' }} />} {props.rate}{' '}
        <span className='card-coutnry'>({props.reviews}) &#8226; {props.country}</span>
      </p>
      <p>{props.host}</p>
      <p>
        <span className='card-price'>From ${props.price} /</span> person
      </p>
    </div>
  )
}

export default Card
