import React from 'react'
import { CloseSharp, CheckSharp, PendingActionsRounded, CancelOutlined, CheckRounded } from '@mui/icons-material'


const Request = ({ request, index, setConnectUser, setIsOpen, acceptHandler, rejectHandler }) => {

  const messageHandler = () => {
    setConnectUser(request.from)
    setIsOpen(true)
  }
  return (
    <div className={index % 2 == 0 ? 'bg-slate-100' : ''}>
      <div className='flex flex-row '>
        <div className='flex flex-col m-4 w-32 items-start'>
          {
            request.status === 'pending' &&
            <div>
              <p className='text-orange-500'><span><PendingActionsRounded /></span>{request.status}</p>
              <div className='flex flex-col mt-5'>
                <button className='text-green-600 m-3 bg-green-50 rounded-full p-1' onClick={() => acceptHandler(request)}><CheckSharp />Accept</button>
                <button className='text-red-600' onClick={() => rejectHandler(request)}><CloseSharp />Reject</button>
              </div>
            </div>
          }
          {
            request.status === 'accept' &&
            <p className='text-green-500'><span><CheckRounded /></span>{request.status}</p>
          }
          {
            request.status === 'accepted-payment-pending' &&
            <p className='text-green-500'><span><CheckRounded /></span>{request.status}</p>
          }
          {
            request.status === 'reject' &&
            <p className='text-red-500'><span><CancelOutlined /></span>{request.status}</p>
          }

        </div>
        <p className='m-4 w-32'>{request.from}</p>
        <p className='m-4 w-32'>{request.serviceName}</p>
        <p className='m-4 w-32'>{request.time}</p>
        <p className='m-4 w-32'>{request.location}</p>
        <button onClick={messageHandler}>
          <p className=' bg-sky-900 rounded text-white p-1'>
            Chat Now
          </p>
        </button>
      </div>
    </div>
  )
}

export default Request


