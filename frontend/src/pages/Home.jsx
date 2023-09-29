import React from 'react'
import '../assets/styles/main.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/common/Header'
import OfferCard from '../components/cards/OfferCard'
import img1 from '../assets/images/carousel-1.jpeg'
import img2 from '../assets/images/carousel-2.jpeg'
import img3 from '../assets/images/carousel-3.jpeg'
import WhyChooseUsCard from '../components/cards/WhyChooseUsCard'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className='offer-section'>
        <h1>What we offer</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
        <div className='offer-card-container'>
          <OfferCard imgUrl={img1} title={'Maid'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <OfferCard imgUrl={img2} title={'Laundry'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <OfferCard imgUrl={img2} title={'Tiffin/Mess'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <OfferCard imgUrl={img3} title={'Grocery'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
        </div>
      </div>

      <div className="testimonial-section">
        <h1>Testimonial</h1>
          <Carousel className='testimonial-carousel' autoPlay={false} interval={4000} infiniteLoop={true} stopOnHover={true} emulateTouch={true} showThumbs={false}>
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
      <div className='whyChooseUs-section'>
        <h1>Why Choose Us</h1>
        <div className="whyChooseUs-card-container">
          <WhyChooseUsCard imgUrl={img1} title={'heading'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <WhyChooseUsCard imgUrl={img1} title={'heading'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <WhyChooseUsCard imgUrl={img1} title={'heading'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
        </div>

      </div>
      <div className='weAreAt-section'>
        <h1>We are At</h1>
        <div className="whyChooseUs-card-container">
          <WhyChooseUsCard imgUrl={img1} title={'heading'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <WhyChooseUsCard imgUrl={img1} title={'heading'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
          <WhyChooseUsCard imgUrl={img1} title={'heading'} desc={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.`} />
        </div>

      </div>
    </div>
  )
}

export default Home
