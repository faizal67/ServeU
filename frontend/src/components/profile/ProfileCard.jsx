import React from 'react'
import profilePic from '../../assets/images/userProfile.png'


const ProfileCard = ({user}) => {
  const profileImg = user.image || profilePic
  return (
    <div className='flex flex-row justify-center items-center space-x-3 p-4'>
      <div className='rounded-full  w-16 h-16 items-center flex justify-center'>
        <img src={profileImg} alt='user image' className='rounded-full'></img>
          </div>
      <div className='flex flex-col'>
        <p className='font-extrabold'>{user.displayName}</p>
        <p className='text-sm text-gray-600'>{user.email}</p>
      </div>
    </div>
  )
}

export default ProfileCard
