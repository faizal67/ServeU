import React, { useEffect, useState } from 'react'
import ServiceListCard from '../components/cards/ServiceListCard'
import HowItWorksCard from '../components/cards/HowItWorksCard'

import Footer from '../components/common/Footer'
import JoinCommunity from '../components/JoinCommunity'

import icon_select from '../assets/images/icon_select.svg'
import icon_book from '../assets/images/icon_book.svg'
import icon_schedule from '../assets/images/icon_schedule.svg'
import icon_confirm from '../assets/images/icon_confirm.svg'

import Location from '../components/services/location'



// import axios from 'axios'

const ServiceListings = ({ maids }) => {

  const currAddress  = Location()

  // const [maids,setMaids] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:3001/api/maids')
  //     .then(response => {
  //       setMaids(response.data)
  //     })
  //   },[])
  // console.log(maids)




  return (
    <div className='serviceListing'>
      <div className="serviceListing-header">
        <h1 className='serviceListing-heading section-heading' >We Will Clean Your home Like it's our own</h1>
        <div className='control-section'>
        <div className='location-container'>
          <input className='control-section-input' value={currAddress}></input>
        </div>
        <div className='sorting-container'>
          <span>Sort: </span>
          <select className='control-section-input' defaultValue={'all'} >
            <option value="title">all</option>
            <option value="title">Price</option>
            <option value="description">Rating</option>
          </select>
        </div>
        <div className='filter-container'>
          <span>Filter: </span>
          <select className='control-section-input' defaultValue={'all'} >
            <option value="title">all</option>
            <option value="title">Gender</option>
          </select>
        </div>
      </div>
      </div>
      

      <h5 className='serviceListing-subHeading section-heading'>Browse All Available Services</h5>
      <div className="serviceListing-card-container">
        {
          maids.map((maid, key) => <ServiceListCard key={key} maid={maid} />)
        }
      </div>
      {/* <div className="featuredServices">
        <h2 className='serviceListing-subHeading section-heading' >Featured Services</h2>
        <div className="featuredSerivices-card-container">
          <ServiceListCard />
          <ServiceListCard />
          <ServiceListCard />
        </div>

      </div> */}
      <div className="howToBook">
        <h5 className='serviceListing-subHeading section-heading' >How to Book a Service</h5>
        <div className="howToBook-card-container">
          <HowItWorksCard imgUrl={icon_select} title={`Select a Service`} desc={`Click on the service listing to view details.`} />
          <HowItWorksCard imgUrl={icon_book} title={`Book Now`} desc={`Click the "Book Now" button on the listing.`} />
          <HowItWorksCard imgUrl={icon_schedule} title={`Choose Date and Time`} desc={`Select your preferred date and time for the service.`} />
          <HowItWorksCard imgUrl={icon_confirm} title={`Confirm Booking`} desc={`Review your booking details and confirm the reservation.`} />
        </div>

      </div>


      <JoinCommunity />
      <Footer />
    </div>
  )
}

export default ServiceListings
