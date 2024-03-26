import React, { useState, useEffect } from 'react'
import NoData from '../common/NoData'

const RequestCol = ({ text }) => {
    return (
      <p className='font-bold m-4  w-32'>{text}</p>
    )
  }

  const Request = ({ request,index ,user}) => {
    return (
      <div className={index%2==0?'bg-slate-100':''}>
        <div className='flex flex-row '>
          <p className='m-4 w-32'>{request.status}</p>
          <p className='m-4 w-32'>{request.name}</p>
          <p className='m-4 w-32'>{request.serviceName}</p>
          <p className='m-4 w-32'>{request.time}</p>
          <p className='m-4 w-32'>{request.address}</p>
          <p className='m-4 w-32'>{request.reply}</p>
        </div>
      </div>
    )
  }


  
const History = ({provider}) => {
  const [history, setHistory] = useState()
  useEffect(() => {
    setHistory(provider.history)
  }, [provider])
  if (!history) return (<div>Loading...</div>)
  // console.log('history',history)
  if(history.length == 0)
  return (<NoData />)
  return (
    <div className='flex flex-col items-center'>
      <h1 className='section-heading'>History</h1>
      <div className='w-auto'>
        <div className='flex flex-row'>
          <RequestCol text={'Status'} />
          <RequestCol text={'Name'} />
          <RequestCol text={'Service Type'} />
          <RequestCol text={'Time'} />
          <RequestCol text={'Address'} />
          <RequestCol text={'Reply'} />
          <RequestCol text={'Message'} />
        </div>
        {
          history.map((req, index) => <Request request={req} index={index} key={index} />)
        }
      </div>

    </div>
  )
}

export default History
