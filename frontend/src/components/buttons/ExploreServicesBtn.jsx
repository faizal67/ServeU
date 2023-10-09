import React from 'react'
import { Link } from 'react-router-dom'

const ExploreServicesBtn = () => {
  return (
    <div>
      <Link className='header-btn' to='/services/categories'>Explore Services</Link>
    </div>
  )
}

export default ExploreServicesBtn
