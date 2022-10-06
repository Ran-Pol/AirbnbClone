import React from 'react'
import photo22 from '../images/airbnbPhotos/image22.png'
import photo23 from '../images/airbnbPhotos/image23.png'
import photo24 from '../images/airbnbPhotos/image24.png'
import photo25 from '../images/airbnbPhotos/image25.png'
import photo26 from '../images/airbnbPhotos/image26.png'
import photo27 from '../images/airbnbPhotos/image27.png'
import photo28 from '../images/airbnbPhotos/image28.png'
import photo29 from '../images/airbnbPhotos/image29.png'
import photo30 from '../images/airbnbPhotos/image30.png'

const Header = () => {
  return (
    <header className="Header-Intro">
      <div>
      <img src={photo22} className="header--img img22" alt="La foto" />
      <img src={photo23} className="header--img img23" alt="La foto" />
      <img src={photo24} className="header--img img24" alt="La foto" />
      <img src={photo25} className="header--img img25" alt="La foto" />
      <img src={photo26} className="header--img img26" alt="La foto" />
      <img src={photo27} className="header--img img27" alt="La foto" />
      <img src={photo28} className="header--img img28" alt="La foto" />
      <img src={photo29} className="header--img img29" alt="La foto" />
      <img src={photo30} className="header--img img30" alt="La foto" />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </header>
  )
}

export default Header
