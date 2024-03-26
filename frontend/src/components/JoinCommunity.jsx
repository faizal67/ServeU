import React from 'react'
import { Link } from 'react-router-dom'

const JoinCommunity = () => {
  return (
    <div className="joinCommunity-section">
        <h1 className='section-heading'>Join Our Growing Community</h1>
        <p>Become a part of our growing community today! Whether you're a service seeker or a provider, ServeU welcomes you to join our community.<br></br> Service providers can expand their reach, while users can enjoy reliable services at their fingertips.</p>
        <div className="joincommunity-btns">
        <Link className='joinCommunity-btn' to={'/services/categories'} >Explore Services</Link>
        <Link className='joinCommunity-btn' to={'/Registration'} >Become a Provider</Link>
        </div>
        
      </div>
  )
}

export default JoinCommunity
