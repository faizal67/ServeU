import { Link } from "react-router-dom"
import './navbar.css'
import { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/images/logo.png'
import ProfilePopup from "../profile/ProfilePopup"
import { set } from "react-hook-form"
import profilePic from '../../assets/images/userProfile.png'



const Navbar = ({ user, setUserdata }) => {

  // console.log('user',user);
  const profileImg = user.image || profilePic

  const [isOpen, setIsOpen] = useState(false);

 // Ref for profile popup
 const popupRef = useRef(null);

 useEffect(() => {
   const handleOutsideClick = (event) => {
     if (popupRef.current && !popupRef.current.contains(event.target)) {
       setIsOpen(false);
     }
   };

   // Adding event listener on mount
   document.addEventListener("mousedown", handleOutsideClick);

   // Cleaning up the event listener
   return () => {
     document.removeEventListener("mousedown", handleOutsideClick);
   };
 }, []);


  const googleLogout = () => {
    localStorage.removeItem('loggedServeUuser');
    setUserdata({})
    window.open("http://localhost:3001/logout", "_self")
    window.localStorage.removeItem('loggedServeUuser');
  }


  return (
    <div>
      <div className="navbar">
        <div className="flex flex-row mr-auto flex-1">
          <Link className="navbar-link" to='/'>Home</Link>
          {
           Object?.keys(user)?.length > 0 && <Link className="navbar-link" to='/dashboard'>Dashboard</Link>
          }
          
          <Link className="navbar-link" to='/services/categories'>Services</Link>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <img width={'210px'} src={logo} alt="logo"  />
        </div>
        <div className="flex flex-row flex-1 justify-end">
          {Object?.keys(user)?.length > 0
            ? <div className="flex flex-row-reverse mr-8" ref={popupRef}>
              <button onClick={() => setIsOpen(prev => !prev)} >
                <img src={profileImg} alt="User profile" className='bg-white w-10 h-10 rounded-full' />
              </button>
              {isOpen && <ProfilePopup user={user} googleLogout={googleLogout}/> }
            </div>
            : <div className="flex flex-row">
              <Link className="navbar-link" to='/signup'>Register</Link>
              <Link className="navbar-link" to='/login'>Login</Link>
            </div>
          }
           {/* <Link className='joinCommunity-btn' to={'/Registration'} >Become a Provider</Link> */}
        </div>

      </div>
    </div>
  )
}

export default Navbar
