import React from 'react'
import { Link } from 'react-router-dom'

const ServiceListCard = ({ imgUrl, provider, desc, price, location, rating}) => {
    return (
        <div className='serviceListing-card' >
            <div className="serviceListCard-header">
            <div className='serviceListing-card-img'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h3>Provider Name{provider}</h3>
            </div>
            
            <div className="serviceListCard-detail">
                <p>Rating: * * * * *{rating}</p>
                <p>Price: $5000/Months {price}</p>
                <p>Location: Pragati vihar Ghaziabad{location}</p>
            </div>

            <Link className='serviceListCard-btn' to={'/services/Listings/service'} >View Details</Link>
        </div>
    )
}

export default ServiceListCard
