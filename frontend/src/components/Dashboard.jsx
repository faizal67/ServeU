import React from 'react'
import UserDashboard from '../pages/UserDashboard'
import MaidDashboard from '../pages/MaidDashboard'

const Dashboard = ({user,serviceUser, provider}) => {
    if(user.type == 'user')
  return <UserDashboard user={serviceUser} />
  if(user.type == 'maid')
  return <MaidDashboard user={user} provider={provider}/>
}

export default Dashboard
