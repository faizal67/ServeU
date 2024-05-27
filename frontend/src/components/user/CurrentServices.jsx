import React, { useEffect, useState } from 'react'
import Loading from '../common/Loading'
import NoData from '../common/NoData'
import { Check } from '@mui/icons-material'
import serviceHandler from '../services/service'
import RatingFeedbackPopup from '../forms/RatingFeedbackPopup'
const RequestCol = ({ text }) => {
  return (
    <p className='font-bold m-4  w-32'>{text}</p>
  )
}

const Service = ({ service, index, user }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const completeHandler = async(service, rating, review) => {
    const updatedService = {...service, status:'completed', rating:rating, review: review};
    try {
      await serviceHandler.updateService(updatedService)
      window.location.reload();
    } catch (error) {
      alert('Some error occur while completing')
    }
  }
  return (
    <div className={index % 2 == 0 ? 'bg-slate-100' : ''}>
      <div className='flex flex-row'>
        <p className='m-4 w-32'>{service.to}</p>
        <p className='m-4 w-32'>{service.serviceName}</p>
        <p className='m-4 w-32'>{service.time}</p>
        <p className='m-4 w-32'>{service.location}</p>
        <button className='text-green-900' onClick={openPopup}><span><Check /></span>Mark as Complete</button>
        <RatingFeedbackPopup isOpen={isPopupOpen} onClose={closePopup} completeHandler={completeHandler} service={service}/>
      </div>
    </div>
  )
}
const CurrentServices = ({ user }) => {
  const [currentServices, setCurrentServices] = useState()
  useEffect(() => {
    if (user && user.current)
        var currentServices = user.current.filter((app) => app.status === 'accepted-payment-complete')
      setCurrentServices(currentServices)
  }, [user])
  if (!currentServices) return (<Loading />)
  if (currentServices.length === 0) return (<NoData />)
  return (
    <div className='flex flex-col items-center'>
      <h1 className='section-heading'>Current Services</h1>
      <div className='w-auto'>
        <div className='flex flex-row'>
          <RequestCol text={'Name'} />
          <RequestCol text={'Service Type'} />
          <RequestCol text={'Time'} />
          <RequestCol text={'Address'} />
          <RequestCol text={''} />
        </div>
        {
          currentServices.map((service, index) => <Service service={service} index={index} key={index} user={user} />)
        }
      </div>


    </div>
  )
}

export default CurrentServices
