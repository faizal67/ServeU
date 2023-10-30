import React from 'react'
import '../assets/styles/main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/common/Header'
import OfferCard from '../components/cards/OfferCard'
import FAQs from '../components/FAQs';

import WhyChooseUsCard from '../components/cards/WhyChooseUsCard'
import WeAreAtCard from '../components/cards/WeAreAtCard';
import Footer from '../components/common/Footer';
import HowItWorks from '../components/HowItWorks';

import icon_reliable from '../assets/images/icon_reliable.png'
import icon_affordable from '../assets/images/icon_affordable.png'
import icon_quality from '../assets/images/icon_quality.png'
import icon_lifestyle from '../assets/images/icon_lifestyle.png'
import icon_convenience from '../assets/images/icon_convenient.jpg'

import icon_delhi from '../assets/images/icon_delhi.svg'
import icon_hydrabad from '../assets/images/icon_hydrabad.svg'
import icon_banglore from '../assets/images/icon_banglore.svg'
import JoinCommunity from '../components/JoinCommunity';

import icon_grocery from '../assets/images/icon_grocery.jpeg'
import icon_maid from '../assets/images/icon_maid.jpeg'
import icon_chef from '../assets/images/icon_chef.jpg'
import icon_tiffin from '../assets/images/icon_tiffin.jpeg'





const Home = () => {


  return (
    <div className="home">
      <Header />
      <div className='offer-section'>
        <h1 className='section-heading'>What we offer</h1>
        <div className='offer-card-container'>
          <OfferCard imgUrl={icon_maid} title={'Maid'} desc={`Keep your home spotless with our trusted cleaning professionals.
   - Services include regular cleaning, deep cleaning, and more.`} />
          <OfferCard imgUrl={icon_chef} title={'Cook/Chef'} desc={` - Save time on laundry with our laundry and dry cleaning services.
   - Clean and fresh clothes without the hassle.
`} />
          <OfferCard imgUrl={icon_tiffin} title={'Tiffin/Mess'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <OfferCard imgUrl={icon_grocery} title={'Grocery'} desc={`- Let us handle your grocery shopping while you focus on what matters.
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
            <p>`I can't believe that i reaaly got a cleaner within an hour. Will definitely use again.`</p>
            <p className="testimonial-writer">Mr. Ramesh Kumar</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`Have used another app in the past and the service was terrible each and everyt time i tried... then i found MaidsApp and was blown away at the quality!!! My house has never been cleaner! And they arrived within two hours of booking`</p>
            <p className="testimonial-writer">Naveen Sharma</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`We have hired houseKeeping staff and front office staff from ServeU for our small hotel in saki naka, Mumbai without paying one -month salary like you do to agencies. i have used ServeU services multiple times. The service are imporving every-time I use them. We just check profile on website and interview candidates we like.`</p>
            <p className="testimonial-writer">Mr. Romy</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`Second helper I have hired through ServeU. Both the times the service was very professional, enough candidates were available and the process was smooth. It is priced just right and the criminal verification is quite thorough. Highly recommended`</p>
            <p className="testimonial-writer">Mr. Anuj Mittal</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`I have been availing the tiffin service from ServeU for the past several months, and I must say, it has been an absolute delight. The food they provide is not just a meal; it's a wholesome experience that brings back the authentic taste of home-cooked food. `</p>
            <p className="testimonial-writer">Mr. Ajay kumar</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`Their commitment to quality and hygiene is truly commendable. I have never once encountered any compromise on the freshness and cleanliness of the food they deliver. Each dish is carefully prepared, using the finest ingredients, and is a testament to their dedication to providing a nutritious and balanced meal.`</p>
            <p className="testimonial-writer">Mr. Manish Singh</p>
          </div>
          <div className='testimonial-carousel-container'>
            <p>`The team at ServeU truly understands the importance of customer satisfaction. They are always receptive to feedback and go the extra mile to accommodate any special requests or dietary preferences. Their courteous and friendly staff adds a personal touch to the entire experience, making me feel like a valued customer every single day.`</p>
            <p className="testimonial-writer">Mrs. Rekha singh</p>
          </div>
        </Carousel>
      </div>
      <HowItWorks />
      <JoinCommunity />

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
          <FAQs />
        </div>
      </div>
      <Footer />
      {/* <a class="btn-6" href="#">Position Aware<span></span></a> */}
    </div>
  )
}

export default Home
