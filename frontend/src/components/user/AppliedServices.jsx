import React, { useEffect, useState, useRef } from 'react'
import ChatApp from '../chatComponent/ChatApp'
import { PendingActions } from '@mui/icons-material'
import Loading from '../common/Loading'

const RequestCol = ({ text }) => {
  return (
    <p className='font-bold m-4  w-32'>{text}</p>
  )
}

const Applied = ({ service, index, setConnectUser, setIsOpen }) => {
  const messageHandler = () => {
    setConnectUser(service.to)
    setIsOpen(prev => !prev)
  }
  return (
    <div className={index % 2 == 0 ? 'bg-slate-100' : ''}>
      <div className='flex flex-row '>
        {
          service.status === 'pending' && 
          <p className='m-4 w-32 text-orange-500'><span><PendingActions color='red'/></span>{service.status}
          </p>
        }
        
        <p className='m-4 w-32'>{service.to}</p>
        <p className='m-4 w-32'>{service.serviceName}</p>
        <p className='m-4 w-32'>{service.time}</p>
        <p className='m-4 w-32'>{service.location}</p>
        <button onClick={messageHandler}>
          <p className=' bg-sky-900 rounded text-white p-1'>
            Chat Now
          </p>
        </button>
      </div>
    </div>
  )
}

// const requests = [
//     {
//       status: 'pending',
//       name: 'Sunil',
//       serviceName: 'Maid',
//       time: 'Morning(7AM-9AM)',
//       address: 'Pragati Vihar Ghaziabad',
//       reply: false,
//       message: 'start Message'
//     },
//     {
//       status: 'completed',
//       name: 'John',
//       serviceName: 'Gardening',
//       time: 'Evening(5PM-8PM)',
//       address: '123 Main Street',
//       reply: true,
//       message: 'Some message for completed request'
//     },
//     {
//       status: 'pending',
//       name: 'Alice',
//       serviceName: 'Cook',
//       time: 'Morning(10AM-12PM)',
//       address: '456 Elm Street',
//       reply: false,
//       message: 'Request for cooking service'
//     },
//     {
//       status: 'pending',
//       name: 'Emily',
//       serviceName: 'Plumbing',
//       time: 'Afternoon(1PM-4PM)',
//       address: '789 Oak Avenue',
//       reply: false,
//       message: 'Plumbing issue in the kitchen'
//     }
//   ];

const AppliedServices = ({ user }) => {

  const [connectUser, setConnectUser] = useState('Md Faizal')
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const [applied, setApplied] = useState()
  useEffect(() => {
    setApplied(user.applied)
  }, [user])

  if (!applied)
    return (<Loading />)
  return (
    <div className='flex flex-col items-center'>
      {/* <ChatApp username={user.displayName}  connectUser={'Md Faizal'}/> */}
      <h1 className='section-heading'>Applied Services</h1>
      <div className='w-auto'>
        <div className='flex flex-row'>
          <RequestCol text={'Status'} />
          <RequestCol text={'Name'} />
          <RequestCol text={'Service Type'} />
          <RequestCol text={'Time'} />
          <RequestCol text={'Address'} />
          <RequestCol text={'Message'} />
          <div ref={popupRef}>
            {
              <div className={`absolute bottom-10 right-10  ${!isOpen ? 'hidden' : ''}`}>
                <ChatApp username={user.displayName} connectUser={connectUser} />
              </div>
            }
          </div>
        </div>
        {
          applied.map((service, index) => <Applied index={index} key={service._id} service={service} setConnectUser={setConnectUser} setIsOpen={setIsOpen} />)
        }
      </div>

    </div>
  )
}

export default AppliedServices
