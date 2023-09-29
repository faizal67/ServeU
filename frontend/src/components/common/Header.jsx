import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import firstImage from '../../assets/images/carousel-1.jpeg'
import secondImage from '../../assets/images/carousel-2.jpeg'
import thirdImage from '../../assets/images/carousel-3.jpeg'

const Header = () => {
  return (
    <div className='header-section'>
      <Carousel className='header-carousel' autoPlay={false} interval={4000} infiniteLoop={true} stopOnHover={true} emulateTouch={true} showThumbs={false}>
        <div className='carousel-container'>
          <h1>Find Your Daily Essential Services at one Place</h1>
          <img src={firstImage} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='carousel-container'>
          <h1>Find Your Daily Essential Services at one Place</h1>
          <img src={secondImage} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='carousel-container'>
          <h1>Find Your Daily Essential Services at one Place</h1>
          <img src={thirdImage} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
      <h1 className='header-heading'>Find Your Daily Essential Services at one Place</h1>
      <p className='header-text'>Get a full suite of intuitive design features and powerful marketing tools to create a unique blog that leaves a lasting impression.</p>
      <button className='header-btn'>Start Blogging</button>
    </div>
  )
}

export default Header
