import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import chefImage from '../../assets/images/img_chef.jpg'
import maidImage from '../../assets/images/maid.jpeg'
import messImage from '../../assets/images/mess.jpg'
import groceryImage from '../../assets/images/icon_grocery.jpeg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-section'>
      <div className='header-welcome'>
        <h1 className="header-welcome-heading">Welcome To ServeU</h1>
        <p className='header-welcome-text'>Are you tired of spending valuable time searching for reliable service providers for your daily needs? Look no further! <b>ServeU</b> is here to simplify your life.</p>
        <Link className='header-btn' to='/services/categories'>Explore Services</Link>
      </div>
      <Carousel className='header-carousel' autoPlay={true} interval={4000} infiniteLoop={true} stopOnHover={true} emulateTouch={true} showThumbs={false}>
        <div className='carousel-container'>
          <h1 >We'll clean your home Like It's Our Own</h1>
          <img src={maidImage}/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='carousel-container'>
          <h1>Daily essentials, at your fingertips</h1>
          <img src={groceryImage} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='carousel-container'>
          <h1>Revolutionizing Your Laundry Routine</h1>
          <img src={chefImage} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className='carousel-container'>
          <h1>Bringing home-cooked meals to your doorstep</h1>
          <img src={messImage} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      </Carousel>
      <div className="header-second-page">
        <p className='header-second-text'>At ServeU, we understand the challenges you face in accessing and managing essential daily services like laundry, grocery shopping, and maid services. Our user-friendly platform connects you with verified and quality service providers, saving you time and reducing stress.
        <Link className='header-btn header-second-btn' to='/services/categories'>Explore Services</Link></p>
        <h1 className='header-second-heading'>Discover, Book, and Manage Essential Services with Ease
        </h1>
      </div>
    </div>
  )
}

export default Header
