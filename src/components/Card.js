import React from 'react'
import { FaStar } from 'react-icons/fa'
const Card = ({ cardList }) => {
  const { title, price, coverImg, stats, location, openSpots } = cardList

  let badge
  if (openSpots === 0) {
    badge = 'SOLD OUT'
  } else if (location === 'Online') {
    badge = 'Online'
  }
  const image = require(`../images/card/${coverImg}`)
  return (
    <div className="card">
      <img src={image} alt="Swimmer" className="card--img" />
      {badge && <p className="card-tag">{badge}</p>}
      <p>
        {<FaStar style={{ color: '#FE395C', fontSize: '15px' }} />}{' '}
        {stats.rating}{' '}
        <span className="card-coutnry">
          ({stats.reviewCount}) &#8226; {location}
        </span>
      </p>
      <p className="card--host">{title}</p>
      <p>
        <span className="card-price">From ${price} /</span> person
      </p>
    </div>
  )
}

export default Card
