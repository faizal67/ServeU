import React, { useEffect, useState, useRef } from 'react'
import Request from './Request';
import ChatApp from '../chatComponent/ChatApp';
import service from '../services/service';
import LoadingSpinner from '../common/LoadingSpinner'
import NoData from '../common/NoData';

const RequestCol = ({ text }) => {
  return (
    <p className='font-bold m-4  w-32'>{text}</p>
  )
}


const ServiceRequests = ({ provider }) => {
  const [loading, setLoading] = useState(false);
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
    if(provider && provider.requests)
      var requestServices = provider.requests.filter((ser)=> ser.status === 'pending' || ser.status === 'reject' || ser.status === 'accepted-payment-pending')
    setRequests(requestServices)
  }, [provider])
  if (!requests) return (<LoadingSpinner />)

  const acceptHandler = async (request) => {
    setLoading(true);
    const updatedRequest = {...request, status:'accepted-payment-pending'};
    try{
      await service.updateService(updatedRequest)
      window.location.reload();
    } catch (error) {
      alert('Some error occur while accepting')
    }
    setLoading(false);
  }
  const rejectHandler = async(request) => {
    console.log(request)
    const updatedRequest = {...request, status:'reject'};
    try {
      await service.updateService(updatedRequest)
    } catch (error) {
      alert('Some error occur while rejecting')
    }
  }
  
  return (
    <div>
    {loading ? <LoadingSpinner /> :
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
        {(requests.length === 0) &&  (<NoData />)}
        {
          requests.map((req, index) => <Request request={req} index={index} key={req._id} setIsOpen={setIsOpen} setConnectUser={setConnectUser} acceptHandler={acceptHandler} rejectHandler={rejectHandler}/>)
        }
      </div>

    </div>
  }
  </div>
  )
}

export default ServiceRequests
