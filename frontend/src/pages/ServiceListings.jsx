import React from 'react'
import ServiceListCard from '../components/cards/ServiceListCard'
import HowItWorksCard from '../components/cards/HowItWorksCard'

import { Link } from "react-router-dom"
import Footer from '../components/common/Footer'
import JoinCommunity from '../components/JoinCommunity'

import icon_select from '../assets/images/icon_select.svg'
import icon_book from '../assets/images/icon_book.svg'
import icon_schedule from '../assets/images/icon_schedule.svg'
import icon_confirm from '../assets/images/icon_confirm.svg'

const ServiceListings = () => {
  return (
    <div className='serviceListing'>
      <h1 className='serviceListing-heading section-heading' >We Will Clean Your home Like it's our own</h1>
      <p className='serviceListing-heading-text'>Explore a wide range of [Category Name] services offered by trusted providers. Each listing provides detailed information about the service, provider, pricing, and more. Find the perfect service to meet your needs and book with confidence.</p>

      <h5 className='serviceListing-subHeading section-heading'>Browse All Available Services</h5>
      <div className="serviceListing-card-container">
        <ServiceListCard />
        <ServiceListCard />
        <ServiceListCard />
        <ServiceListCard />
        <ServiceListCard />
        <ServiceListCard />
      </div>
      <div className="featuredServices">
        <h2 className='serviceListing-subHeading section-heading' >Featured Services</h2>
        <div className="featuredSerivices-card-container">
          <ServiceListCard />
          <ServiceListCard />
          <ServiceListCard />
        </div>

      </div>
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
