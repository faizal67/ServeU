import React from 'react'
import ServiceCategoriesCard from '../components/cards/ServiceCategoriesCard'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/common/Footer'
import icon_maid from '../assets/images/icon_maid.jpeg'
import icon_grocery from '../assets/images/icon_grocery.jpeg'
import icon_tiffin from '../assets/images/icon_tiffin.jpeg'
import icon_chef from '../assets/images/icon_chef.jpg'
import JoinCommunity from '../components/JoinCommunity'

const ServiceCategories = () => {
  return (
    <div className='serviceCategories'>
      <h1 className='section-heading serviceCategories-heading'>Browse our extensive list of service categories</h1>
      <p className='serviceCategories-text'>Discover a wide range of essential services to simplify your daily life. At <b>ServeU</b>, we've carefully curated service categories to meet your every need. Explore and find the services that make your life easier and more convenient.</p>
      <div className="serviceCategories-card-container">
        <ServiceCategoriesCard imgUrl={icon_maid} title={`Home Cleaning Maid`} desc={`Keep your home spotless with our trusted cleaning professionals.
Services include regular cleaning, deep cleaning, and more.`} />
        <ServiceCategoriesCard imgUrl={icon_grocery} title={`Grocery Shopping`} desc={`Let us handle your grocery shopping while you focus on what matters.
Get your groceries delivered right to your doorstep.`} />
        <ServiceCategoriesCard imgUrl={icon_tiffin} title={`Tiffin and Mess`} desc={`Save time on laundry with our laundry and dry cleaning services.
Clean and fresh clothes without the hassle.`} />
        <ServiceCategoriesCard imgUrl={icon_chef} title={`Cook and Chef`} desc={`Trustworthy childcare services to ensure your child's well-being.
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
