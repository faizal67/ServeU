import React from 'react'

const ProfileButton = ({text, tailwind}) => {
  return (
    <button className={`${tailwind} bg-gray-100  hover:bg-gray-200 px-6 py-3 rounded  font-bold text-sm`}>{text}</button>
  )
}

export default ProfileButton
