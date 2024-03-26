import React, { useEffect, useState, useRef } from 'react'
import Request from './Request';
import ChatApp from '../chatComponent/ChatApp';
import Loading from '../common/Loading';

const RequestCol = ({ text }) => {
  return (
    <p className='font-bold m-4  w-32'>{text}</p>
  )
}


const ServiceRequests = ({ provider }) => {

  const [connectUser, setConnectUser] = useState('Manish Kumar Mandavi')
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

  const [requests, setRequests] = useState()
  useEffect(() => {
    setRequests(provider.requests)
  }, [provider])
  if (!requests) return (<Loading />)

  return (
    <div className='flex flex-col items-center'>
      {/* <ChatApp username={provider.displayName} connectUser={connectUser}/> */}
      <h1 className='section-heading'>Service Requests</h1>
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
              <ChatApp username={provider.displayName} connectUser={connectUser}/>
            </div>
            }
          </div>
        </div>
        {
          requests.map((req, index) => <Request request={req} index={index} key={req._id} setIsOpen={setIsOpen} setConnectUser={setConnectUser}/>)
        }
      </div>

    </div>
  )
}

export default ServiceRequests
