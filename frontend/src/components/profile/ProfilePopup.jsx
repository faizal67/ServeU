import React from 'react'
import ProfileCard from './ProfileCard'
import { Link } from 'react-router-dom'

const ProfilePopup = ({user, googleLogout}) => {

  return (
    <div  className='mt-3 rounded-md bg-white flex flex-col profile-popup w-72'>
        <ProfileCard user={user} />
        <hr></hr>
        <div className='flex flex-col gap-1 pt-3'>
        <Link className="hover:bg-slate-100 p-2 pl-3" to='/profile'>Profile Setting</Link>
        <Link className="hover:bg-slate-100 p-2 pl-3" to='/dashboard'>Dashboard</Link>
        <Link className="hover:bg-slate-100 p-2 pl-3" to='/signup'>My Booking</Link>
        <Link className="hover:bg-slate-100 p-2 pl-3" to='/signup'>Booking History</Link>
        <Link className="hover:bg-slate-100 p-2 pl-3" to='/signup'>Get Help</Link>
        <button onClick={googleLogout} className="p-3 border-t-2 hover:bg-red-100 border-red-200">Logout</button>
        </div>
        
    </div>
  )
}

export default ProfilePopup
