import React from 'react'
import ServiceCategoriesCard from '../components/cards/ServiceCategoriesCard'
import HowItWorks from '../components/HowItWorks'
import GetStarted from '../components/GetStarted'
import Footer from '../components/common/Footer'
import img1 from '../assets/images/laundry.jpeg'
import img2 from '../assets/images/maid.jpeg'
import img3 from '../assets/images/mess.jpg'
import JoinCommunity from '../components/JoinCommunity'

const ServiceCategories = () => {
  return (
    <div className='serviceCategories'>
      <h1 className='section-heading serviceCategories-heading'>Browse our extensive list of service categories</h1>
      <p className='serviceCategories-text'>Discover a wide range of essential services to simplify your daily life. At <b>ServeU</b>, we've carefully curated service categories to meet your every need. Explore and find the services that make your life easier and more convenient.</p>
      <div className="serviceCategories-card-container">
        <ServiceCategoriesCard imgUrl={img1} title={`Home Cleaning Maid`} desc={`Keep your home spotless with our trusted cleaning professionals.
Services include regular cleaning, deep cleaning, and more.`} />
        <ServiceCategoriesCard imgUrl={img1} title={`Grocery Shopping`} desc={`Let us handle your grocery shopping while you focus on what matters.
Get your groceries delivered right to your doorstep.`} />
        <ServiceCategoriesCard imgUrl={img1} title={`Laundry and Dry Cleaning`} desc={`Save time on laundry with our laundry and dry cleaning services.
Clean and fresh clothes without the hassle.`} />
        <ServiceCategoriesCard imgUrl={img1} title={`Childcare Services`} desc={`Trustworthy childcare services to ensure your child's well-being.
Babysitting, after-school care, and more.`} />
      </div>
      <HowItWorks />
      <JoinCommunity />
      <Footer />

      {/* 

Explore our service categories now and experience the convenience of [Your Service Booking App].

Start Exploring CTA Button */}
    </div>
  )
}

export default ServiceCategories
