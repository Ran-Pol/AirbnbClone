import React from 'react'
import photo from '../images/photo-grid.png'


const Section = () => {
  return (
    <section className="Header-Intro">
      <div>
      <img src={photo} className="header--img img22" alt="La foto" />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  )
}

export default Section
