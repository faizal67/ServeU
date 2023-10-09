import React from 'react'
import Footer from '../components/common/Footer'
import maid from '../assets/images/maidProvider.jpeg'
import icon_star from '../assets/images/icon_star.svg'
import icon_verified from '../assets/images/icon_verified.svg'

const provider = {
  name: 'Anita Malakar',
  verified: 'true',
  rating: 4,
  mobile: 91 - 9899234324,
  whatsApp: 91 - 234405849,
  city: 'Delhi',
  address: 'Sector 45, Grurgram, 122003',
  experience: 2,
  language: ['Hindi', 'English'],
  expectedSalary: [10000, 15000],
  available: 'full Day',
  avialableAs: ['maid', 'childCare'],
  ExpertiseIn: ['Floor cleaning',
    'Utensil cleaning',
    'Dusting',
    'Vegetable chopping',
    'Watering plants',
    'Ironing clothes',
    'Give medicines',
    'Cook for patient',
    'Female patient',
    'On bed patient'],
  salary: {
    liveIN: [15000, 26750],
    fullDay: [12000, 18500],
    partTime: [1500, 2500]
  },
  age: 34,
  about: "I live with my son. He is study in school.",
  education: 5,
  withUsSince: '12-01-2022',
  previousExperience: {
    city: "delhi",
    salary: 20000,
    duration: [2018, 2022],
  },
  reviews: {
    userName: 'Unknown',
    text: 'She was very good in every work',
    rating: 3
  }
}

const salaryItem = [];
for (let key in provider.salary) {
  salaryItem.push(<p key={key}>{key} :  {'₹' + provider.salary[key][0]} - {'₹' + provider.salary[key][1]}</p>)
}

const ratingItem = [];
for (let i = 0; i < provider.rating; i++) {
  ratingItem.push(<img src={icon_star} alt='star'></img>)
}

const verifiedItem = [];
if (provider.verified == 'true')
  verifiedItem.push(<img className='varified-img' src={icon_verified}></img>)

const previousExperienceItem = [];
for (let key in provider.previousExperience) {
  if (key == 'duration')
    previousExperienceItem.push(<p key={key}>{key} : {provider.previousExperience[key][0]} - {provider.previousExperience[key][0]} </p>)
  else
    previousExperienceItem.push(<p key={key}>{key} : {provider.previousExperience[key]} </p>)

}

function ServiceDetails() {
  return (
    <div className="serviceDetails">
      <div className="serviceDetails-profile">
        <div className="profile-header">
          <div className="profile-header-left">
            <div className="profile-img-container">
              <img src={maid} alt="" />
            </div>
            <h2 className='serviceDetails-heading'>{provider.name} {verifiedItem}</h2>
            <div className='rating-container'>{ratingItem}</div>
            <p>
              <span className='serviceDetails-subHeading'>Call:</span>
              <span className='serviceDetails-content'> {provider.mobile} </span>
            </p>
            <p>
              <span className='serviceDetails-subHeading'>WhatApp:</span>
              <span className='serviceDetails-content'> {provider.whatsApp} </span>
            </p>

          </div>
          <div className="profile-header-right">

            <p>
              <span className='serviceDetails-subHeading'>City:</span>
              <span className='serviceDetails-content'> {provider.city} </span>
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
            </p>
          </div>
        </div>
        <hr />
        <div className="serviceDetail-about">
          <h2 className='serviceDetails-heading'>Service Details</h2>

          <p>
            <span className='serviceDetails-subHeading'>Available as:</span>
            <span className='serviceDetails-content'> {provider.avialableAs.map((val, ind) => <span key={ind}> {val} </span>)} </span>
          </p>
          <p>
            <span className='serviceDetails-subHeading'>Expertise in:</span>
            <span className='serviceDetails-content'> {provider.ExpertiseIn.map((val, ind) => <span key={ind}> {val} </span>)} </span>
          </p>

          <p>
              <span className='serviceDetails-subHeading'>Price:</span>
              <span className='serviceDetails-content'> {salaryItem}</span>
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
          <p>
              <span className='serviceDetails-subHeading'>With Us Since:</span>
              <span className='serviceDetails-content'> {provider.withUsSince}</span>
            </p>
          <p>
              <span className='serviceDetails-subHeading'>Privious Experience:</span>
              <span className='serviceDetails-content'> {previousExperienceItem}</span>
            </p>
        </div>
      </div>
      <h2>Reviews</h2>
      <Footer />
    </div>
  )
}

export default ServiceDetails
