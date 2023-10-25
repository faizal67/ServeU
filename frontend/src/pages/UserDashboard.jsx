import React, { useState } from 'react'

import Location from '../components/services/location'



const UserDashboard = () => {

  const address = Location();
  return (
    <div>
      {address}
    </div>
  )
}

export default UserDashboard
