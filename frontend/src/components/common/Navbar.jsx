import { Link } from "react-router-dom"
import './navbar.css'
import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/images/logo.png'

const Navbar = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div>
      <div className="navbar">
        <div className="left-links">
          <Link className="navbar-link" to='/'>Home</Link>
          <Link className="navbar-link" to='/user/dashboard'>Dashboard</Link>
          <Link className="navbar-link" to='/services/categories'>Services</Link>
        </div>
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-links">
          {user
            ? <div>
              <Link className="navbar-link" to='/user/profile'>{user}</Link>
              {/* <Link className="navbar-link" to='/user/profile'>Profile</Link> */}
            </div>
            : <div>
              <Link className="navbar-link" to='/signup'>Register</Link>
              <Link className="navbar-link" to='/login'>Login</Link>
            </div>
          }


        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine size={27} onClick={() => { setToggleMenu(false) }} />
            : <RiMenu3Line size={27} onClick={() => { setToggleMenu(true) }} />
          }
          {toggleMenu &&
            (
              <div className="navbar-menu-links">
                <Link className="navbar-menu-link" to='/'>Home</Link>
                <Link className="navbar-menu-link" to='/dashboard'>Dashboard</Link>
                <Link className="navbar-menu-link" to='/register'>Register</Link>
                <Link className="navbar-menu-link" to='/login'>Login</Link>
                <Link className="navbar-menu-link" to='/profile'>Profile</Link>
              </div>
            )}

        </div>

      </div>
    </div>
  )
}

export default Navbar
