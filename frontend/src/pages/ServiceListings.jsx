import React, { useEffect, useState } from 'react'
import ServiceListCard from '../components/cards/ServiceListCard'
import HowItWorksCard from '../components/cards/HowItWorksCard'

import Footer from '../components/common/Footer'
import JoinCommunity from '../components/JoinCommunity'

import icon_select from '../assets/images/icon_select.svg'
import icon_book from '../assets/images/icon_book.svg'
import icon_schedule from '../assets/images/icon_schedule.svg'
import icon_confirm from '../assets/images/icon_confirm.svg'

// import Location from '../components/services/location'
import icon_location from '../assets/images/icon_location.svg'



// import axios from 'axios'

const ServiceListings = ({ maids, location }) => {

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('all')

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        price: 'expectedSalary',
        rating: 'rating',
      };
      const sortProperty = types[type];
      const sorted = [...data].sort((a, b) =>
        sortProperty === 'expectedSalary'
          ? b[sortProperty][0] - a[sortProperty][0]
          : b[sortProperty] - a[sortProperty]);
      setData([...sorted]);
    };
    sortType==='all' ? setData([...maids]) : sortArray(sortType);
  }, [maids, sortType]);


  const [filter, setFilter] = useState('any');

  useEffect(() => {
    const filterArray = (filterValue) => {
      if (filterValue === 'any')
        setData(maids)
      else {
        const filtered = [...maids].filter(maid => maid.gender === filterValue);
        setData(filtered);
      }
    };

    filterArray(filter);
  }, [maids, filter]);


  if (!maids) return <div>Loding...</div>



  // const currAddress = Location()

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
            <img src={icon_location} alt='location icon' height={'30px'} width={'30px'} ></img>
            <input className='location-container-input' value={location} ></input>
          </div>
          <div className='sorting-container'>
            <span>Sort: </span>
            <select className='control-section-input' onChange={(e) => setSortType(e.target.value)} >
              <option value="all">all</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div className='filter-container'>
            <span>Filter: </span>
            <select className='control-section-input' onChange={(e) => setFilter(e.target.value)}>
              <option value="any">any</option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>


      <h5 className='serviceListing-subHeading section-heading'>Browse All Available Services</h5>
      <div className="serviceListing-card-container">
        {
          data.map((maid, key) => <ServiceListCard key={key} maid={maid}/>)
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
