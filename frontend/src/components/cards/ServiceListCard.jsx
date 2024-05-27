import React from 'react'
import { Link } from 'react-router-dom'

import imgUrl from '../../assets/images/maidProvider.jpeg'
import icon_person from '../../assets/images/icon_person.svg'
import icon_star from '../../assets/images/icon_star.svg'



const ServiceListCard = ({ provider }) => {

    const ratingItem = [];
    for (let i = 0; i < provider.rating; i++) {
        ratingItem.push(<img src={icon_star} alt='star' height={'20px'} width={'20px'}></img>)
    }
    // console.log(provider)
    return (
        <div className='serviceListing-card' >
            <div className="serviceListCard-header">
                <div className='serviceListing-card-img'>
                    <img src={icon_person} alt='image' height={'10px'} width={'10px'}></img>
                </div>
                <b className='pt-1'>{provider.businessName}</b>
            </div>

            <div className="serviceListCard-detail">
                <p style={{ display: 'flex', alignItems: 'center' }} >Rating:{ratingItem}</p>
                {/* <p>Price:{provider.expectedSalary[0]}/month</p> */}
                <p>Location:{provider.address}</p>
            </div>

            <Link className='serviceListCard-btn ' to={`/services/Listings/service/${provider._id}`} >View Details</Link>
        </div>
    )
}

export default ServiceListCard
