import React from 'react'
import { Link } from 'react-router-dom'

import imgUrl from '../../assets/images/maidProvider.jpeg'


const ServiceListCard = ({maid}) => {
    // console.log(maid)
    return (
        <div className='serviceListing-card' >
            <div className="serviceListCard-header">
            <div className='serviceListing-card-img'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h3>{maid.name}</h3>
            </div>
            
            <div className="serviceListCard-detail">
                <p>Rating:{maid.rating}</p>
                <p>Price:{maid.expectedSalary[0]}/month</p>
                <p>Location:{maid.address}</p>
            </div>

            <Link className='serviceListCard-btn' to={`/services/Listings/service/${maid.id}`} >View Details</Link>
        </div>
    )
}

export default ServiceListCard
