import React from 'react'
import Footer from '../components/common/Footer'
import maid from '../assets/images/maidProvider.jpeg'
import icon_star from '../assets/images/icon_star.svg'
import icon_verified from '../assets/images/icon_verified.svg'
import { useNavigate, useParams } from 'react-router'
import ServiceDetailSkeletonCard from '../components/cards/ServiceDetailSkeletonCard'
import serviceServices from '../components/services/service'

// const provider = {
//   name: 'Anita Malakar',
//   verified: 'true',
//   rating: 4,
//   mobile: 91 - 9899234324,
//   whatsApp: 91 - 234405849,
//   city: 'Delhi',
//   address: 'Sector 45, Grurgram, 122003',
//   experience: 2,
//   language: ['Hindi', 'English'],
//   expectedSalary: [10000, 15000],
//   available: 'full Day',
//   avialableAs: ['maid', 'childCare'],
//   ExpertiseIn: ['Floor cleaning',
//     'Utensil cleaning',
//     'Dusting',
//     'Vegetable chopping',
//     'Watering plants',
//     'Ironing clothes',
//     'Give medicines',
//     'Cook for patient',
//     'Female patient',
//     'On bed patient'],
//   salary: {
//     liveIN: [15000, 26750],
//     fullDay: [12000, 18500],
//     partTime: [1500, 2500]
//   },
//   age: 34,
//   about: "I live with my son. He is study in school.",
//   education: 5,
//   withUsSince: '12-01-2022',
//   previousExperience: {
//     city: "delhi",
//     salary: 20000,
//     duration: [2018, 2022],
//   },
//   reviews: {
//     userName: 'Unknown',
//     text: 'She was very good in every work',
//     rating: 3
//   }
// }



function ServiceDetails({ maids, serviceUser, location }) {
  const navigate = useNavigate
  const id = useParams().id
  const provider = maids.find(maid => maid._id == id)
  if (provider == undefined)
    navigate('/services/listings')

  if (maids.length == 0)
    return (
      <ServiceDetailSkeletonCard />
    )


  const serviceList = provider.provides
  console.log('user detail', serviceUser);

  const handleRequest = async (service) =>{

    await serviceServices.addService({service,provider,serviceUser, location})

  }
  // const salaryItem = [];
  // for (let key in provider.salary) {
  //   salaryItem.push(<p className='salary-container' key={key}> <span className='salary-heading'>{key} </span> :  <span className='salary-body'> {'₹' + provider.salary[key][0]} - {'₹' + provider.salary[key][1]}</span></p>)
  // }

  const ratingItem = [];
  for (let i = 0; i < provider.rating; i++) {
    ratingItem.push(<img src={icon_star} alt='star'></img>)
  }

  // const verifiedItem = [];
  // if (provider.verified == 'true')
  //   verifiedItem.push(<img className='varified-img' src={icon_verified}></img>)

  // const previousExperienceItem = [];
  // for (let key in provider.previousExperience) {
  //   if (key == 'duration')
  //     previousExperienceItem.push(<p key={key}>{key} : {provider.previousExperience[key][0]} - {provider.previousExperience[key][0]} </p>)
  //   else
  //     previousExperienceItem.push(<p key={key}>{key} : {provider.previousExperience[key]} </p>)

  // }

  return (
    <div className="serviceDetails">
      <div className="serviceDetails-profile">
        <div className="profile-header">
          <div className="profile-header-left">
            <div className="profile-img-container">
              <img src={maid} alt="" />
            </div>
            {/* <h2 className='serviceDetails-heading'>{provider.displyName} {verifiedItem}</h2> */}
            <h2 className='serviceDetails-heading'>{provider.displayName}</h2>
            <div className='rating-container'>{ratingItem}</div>
            <p>
              <span className='serviceDetails-subHeading'>Call:</span>
              <span className='serviceDetails-content'> {provider.mobile} </span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>WhatApp:</span>
              <span className='serviceDetails-content'> {provider.mobile} </span>
            </p>

          </div>
          <div className="profile-header-right">

            <p>
              {/* <span className='serviceDetails-subHeading'>City:</span> */}
              {/* <span className='serviceDetails-content'> {provider.city} </span> */}
            </p>

            <p>
              <span className='serviceDetails-subHeading'>Address:</span>
              <span className='serviceDetails-content'> {provider.address} </span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>Experience:</span>
              <span className='serviceDetails-content'> {provider.experience} Years </span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>Age:</span>
              <span className='serviceDetails-content'> {provider.age}</span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>About:</span>
              <span className='serviceDetails-content'> {provider.about}</span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>Education Qualification:</span>
              <span className='serviceDetails-content'> {provider.education}</span>
            </p>

            {/* <p>
              <span className='serviceDetails-subHeading'>Language Known:</span>
              {provider.language.map((lan, index) => <span className='serviceDetails-content' key={index}> {lan} </span>)}
            </p>
            <p>
              <span className='serviceDetails-subHeading'>Expected-salary:</span>
              <span className='serviceDetails-content'> {'₹' + provider.expectedSalary[0] + ' - ' + '₹' + provider.expectedSalary[1]}</span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>Available Time:</span>
              <span className='serviceDetails-content'> {provider.available}</span>
            </p> */}
          </div>
        </div>
        <hr />
        <div className="serviceDetail-about ">
          {/* <h2 className='serviceDetails-heading'>Service Details</h2> */}
          <h1 className='section-heading'>Services</h1>
          <div className='w-3/4 pb-5'>
            <div className='flex flex-row bg-blue-300 w-300'>
              <p className='font-bold m-4 w-48'> Service Name </p>
              <p className='font-bold m-4 w-48'> Time </p>
              <p className='font-bold m-4 w-48'> Price </p>
              <p className='font-bold m-4 w-48'> Available </p>
            </div>
            {
              serviceList.map((service, index) => (
                <div className='flex flex-row items-center'>
                  <p className='m-4 w-44'>{service.serviceName}</p>
                  <p className='m-4 w-44'>{service.time}</p>
                  <p className='m-4 w-44'>{'₹ '+service.price}</p>
                  {service.available ? <p className='text-green-700'>Available</p> : <p className='text-red-200'>Not Available</p>}

                  <button className='border-green-600 border-2 ml-10 hover:bg-green-300' onClick={()=>handleRequest(service)}>Raise Request</button>
                </div>
              ))
            }
          </div>
          
          {/* <p>
            <span className='serviceDetails-subHeading'>Expertise in:</span>
            <span className='serviceDetails-content'> {provider.ExpertiseIn.map((val, ind) => <span key={ind}>  {val},  </span>)} </span>
          </p> */}




          <p>
            <span className='serviceDetails-subHeading'>With Us Since:</span>
            {/* <span className='serviceDetails-content'> {provider.withUsSince}</span> */}
          </p>
          <p>
            <span className='serviceDetails-subHeading'>Privious Experience:</span>
            {/* <span className='serviceDetails-content'> {previousExperienceItem}</span> */}
          </p>
        </div>
      </div>
      <h2>Reviews</h2>
      <Footer />
    </div>
  )

}

export default ServiceDetails
