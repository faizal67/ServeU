import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-link-section'>
        <div className="ourServices">
          <h4>Our Services</h4>
          <Link className="footer-link" to='/'>Mess/Tiffin</Link>
          <Link className="footer-link" to='/'>Maid</Link>
          <Link className="footer-link" to='/'>Grocery</Link>
          <Link className="footer-link" to='/'>Loundry</Link>
          <hr />
        </div>
        <div className="aboutUs">
          <h4>About us</h4>
          <Link className="footer-link" to='/'>About us</Link>
          <Link className="footer-link" to='/'>Connect with us</Link>
          <Link className="footer-link" to='/'>Mail</Link>
          <Link className="footer-link" to='/'>Developer</Link>
          <hr />
        </div>
        <div className="JoinUs">
          <h4>join us</h4>
          <Link className="footer-link" to='/'>Join us</Link>
          <Link className="footer-link" to='/'>Register Yourself</Link>
          <Link className="footer-link" to='/'>Make your Career</Link>
          <Link className="footer-link" to='/'>Start your bussiness</Link>
          <hr />
        </div>
      </div>

      <p className='copywrite'> Copywrite &copy; 2023 ServeU. All Right Reserved</p>
    </div>
  )
}

export default Footer
