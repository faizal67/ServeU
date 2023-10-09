import React from 'react'
import HowItWorksCard from './cards/HowItWorksCard'
import icon_search from '../assets/images/icon_search.jpg'
import icon_book from '../assets/images/icon_book.png'
import icon_relax from '../assets/images/icon_relax.png'

const HowItWorks = () => {
  return (
    <div className='howItWorks'>
      <h1 className='section-heading'>How it works</h1>
      <div className="howItWorks-card-container">
        <HowItWorksCard imgUrl={icon_search} title={`Search`} desc={`Find services by category, location, or keywords.`} />
        <HowItWorksCard imgUrl={icon_book} title={`Book`} desc={`Select your preferred provider, date, and time.`} />
        <HowItWorksCard imgUrl={icon_relax} title={`Relax`} desc={`Enjoy high-quality services stress-free.`} />
      </div>
    </div>
  )
}

export default HowItWorks
