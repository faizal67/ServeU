import React from 'react'
import '../assets/styles/main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/common/Header'
import OfferCard from '../components/cards/OfferCard'
import img1 from '../assets/images/laundry.jpeg'
import img2 from '../assets/images/maid.jpeg'
import img3 from '../assets/images/mess.jpg'
import WhyChooseUsCard from '../components/cards/WhyChooseUsCard'
import WeAreAtCard from '../components/cards/WeAreAtCard';
import Footer from '../components/common/Footer';
import FAQCard from '../components/cards/FAQCard';
import HowItWorks from '../components/HowItWorks';
import { Link } from 'react-router-dom';

import icon_reliable from '../assets/images/icon_reliable.png'
import icon_affordable from '../assets/images/icon_affordable.png'
import icon_quality from '../assets/images/icon_quality.png'
import icon_lifestyle from '../assets/images/icon_lifestyle.png'
import icon_convenience from '../assets/images/icon_convenient.jpg'

import icon_delhi from '../assets/images/icon_delhi.svg'
import icon_hydrabad from '../assets/images/icon_hydrabad.svg'
import icon_banglore from '../assets/images/icon_banglore.svg'
import JoinCommunity from '../components/JoinCommunity';




const Home = () => {

  
  return (
    <div className="home">
      <Header />
      <div className='offer-section'>
        <h1 className='section-heading'>What we offer</h1>
        <div className='offer-card-container'>
          <OfferCard imgUrl={img1} title={'Maid'} desc={`Keep your home spotless with our trusted cleaning professionals.
   - Services include regular cleaning, deep cleaning, and more.`} />
          <OfferCard imgUrl={img2} title={'Laundry'} desc={` - Save time on laundry with our laundry and dry cleaning services.
   - Clean and fresh clothes without the hassle.
`} />
          <OfferCard imgUrl={img2} title={'Tiffin/Mess'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <OfferCard imgUrl={img3} title={'Grocery'} desc={`- Let us handle your grocery shopping while you focus on what matters.
   - Get your groceries delivered right to your doorstep.
`} />
        </div>
      </div>




      <div className='whyChooseUs-section'>
        <h1 className='section-heading'>Why Choose Us</h1>
        <div className="whyChooseUs-card-container">
          <WhyChooseUsCard imgUrl={icon_reliable} title={'Reliable'} desc={`We’re not an agency, but a young passionate group of professionals.`} />
          <WhyChooseUsCard imgUrl={icon_affordable} title={'Transparent Pricing'} desc={`You get what you pay for. Compare Prices among different service Provider`} />
          <WhyChooseUsCard imgUrl={icon_quality} title={'Quality'} desc={`Access a network of trusted and vetted service providers.`} />
          <WhyChooseUsCard imgUrl={icon_convenience} title={'Convenience'} desc={`Manage bookings and track service progress in one place.`} />
          <WhyChooseUsCard imgUrl={icon_lifestyle} title={'Enhanced Lifestyle'} desc={`Free up your time for what matters most to you.`} />
        </div>

      </div>

      <div className="testimonial-section">
        <h1 className='section-heading'>Testimonial</h1>
        <Carousel className='testimonial-carousel' autoPlay={true} interval={4000} infiniteLoop={true} stopOnHover={true} emulateTouch={true} showThumbs={false}>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`</p>
            <p className="testimonial-writer">Hero Name</p>
          </div>
        </Carousel>
      </div>
      <HowItWorks />
      <JoinCommunity/>

      <hr></hr>

      <div className='weAreAt-section'>
        <h1 className='section-heading'>We are At</h1>
        <div className="weAreAt-card-container">
          <WeAreAtCard imgUrl={icon_delhi} title={'Delhi'} />
          <WeAreAtCard imgUrl={icon_hydrabad} title={'Hydrabad'} />
          <WeAreAtCard imgUrl={icon_banglore} title={'Banglore'} />
          <WeAreAtCard imgUrl={icon_banglore} title={'Pune'} />
          <WeAreAtCard imgUrl={icon_hydrabad} title={'Noida'} />
        </div>
      </div>

      <div className='FAQ-section'>
        <h1 className='section-heading'>FAQs</h1>
        <div className="FAQ-container">
          <FAQCard ques={'How can I hire a housemaid/babysitter/cook from Broomees?'} ans={`1: Choose your desired service, fill in your requirements and make a booking on our platform. 
2: Confirm your requirements with the relationship manager assigned to you. /n
3: Sit tight while our relationship manager finds the right fit for your home.`} />
          <FAQCard ques={'How can I hire a housemaid/babysitter/cook from Broomees?'} ans={`1: Choose your desired service, fill in your requirements and make a booking on our platform. 
2: Confirm your requirements with the relationship manager assigned to you. /n
3: Sit tight while our relationship manager finds the right fit for your home.`} />
          <FAQCard ques={'How can I hire a housemaid/babysitter/cook from Broomees?'} ans={`1: Choose your desired service, fill in your requirements and make a booking on our platform. 
2: Confirm your requirements with the relationship manager assigned to you. /n
3: Sit tight while our relationship manager finds the right fit for your home.`} />
          <FAQCard ques={'How can I hire a housemaid/babysitter/cook from Broomees?'} ans={`1: Choose your desired service, fill in your requirements and make a booking on our platform. 
2: Confirm your requirements with the relationship manager assigned to you. /n
3: Sit tight while our relationship manager finds the right fit for your home.`} />
          <FAQCard ques={'How can I hire a housemaid/babysitter/cook from Broomees?'} ans={`1: Choose your desired service, fill in your requirements and make a booking on our platform. 
2: Confirm your requirements with the relationship manager assigned to you. /n
3: Sit tight while our relationship manager finds the right fit for your home.`} />
        </div>
      </div>
      <Footer />
      <a class="btn-6" href="#">Position Aware<span></span></a>
    </div>
  )
}

export default Home
