import React, { useEffect, useState } from 'react'
import Service from './Service';
import { Button } from '@mui/material'
import serviceListServices from '../services/serviceList'

const ListCol = ({ text }) => {
  return (
    <p className='font-bold m-4 w-48'>{text}</p>
  )
}



const ServiceListing = ({provider}) => {
  const [serviceList,setServiceList] = useState(provider.provides)
  // console.log('services:',provider.provides);

  useEffect(()=>{
    provider.provides = serviceList;
    // console.log('updatedprovider',provider)
  },[serviceList])

  const addHandler = async () =>{
    const newService ={
      serviceName: "",
      time: "Morning(7AM-9AM)",
      price: 0,
      available: true,
    }
    const savedService = await serviceListServices.add({provider,newService})
    console.log('savedService',savedService)

    setServiceList((prevService) =>[
      ...prevService,
      savedService
    ])

  }

  


  return (
    <div className='flex flex-col items-center'>
      <h1 className='section-heading'>Service Listing</h1>
      <div className='w-3/4'>
      <div className='flex flex-row bg-blue-300 w-300'>
        <ListCol text='Service Name' />
        <ListCol text='Time' />
        <ListCol text='Price' />
        <ListCol text='Available' />
      </div>
      {
        serviceList.map((service,index) => (
          <Service provider={provider} key={service._id}  service={service} setServiceList={setServiceList} index={index} />
        ))
      }

      <h1 className='font-bold text-2xl text-sky-900'>Add New Service</h1>

      <Button onClick={addHandler}>Add</Button>

      </div>
    </div>
  )
}

export default ServiceListing
