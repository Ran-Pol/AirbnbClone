import React from 'react'
import { FaStar } from 'react-icons/fa'
const Card = (props) => {
  let badge
  if (props.tag === 0) {
    badge = 'SOLD OUT'
  } else if (props.country === 'Online') {
    badge = 'Online'
  }
  const image = require(`../images/card/${props.img}`)
  return (
    <div className="card">
      <img src={image} alt="Swimmer" className="card--img" />
      {badge && <p className="card-tag">{badge}</p>}
      <p>
        {<FaStar style={{ color: '#FE395C', fontSize: '15px' }} />} {props.rate}{' '}
        <span className="card-coutnry">
          ({props.reviews}) &#8226; {props.country}
        </span>
      </p>
      <p className="card--host">{props.host}</p>
      <p>
        <span className="card-price">From ${props.price} /</span> person
      </p>
    </div>
  )
}

export default Card
