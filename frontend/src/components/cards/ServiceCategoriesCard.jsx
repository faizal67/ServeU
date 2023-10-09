import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCategoriesCard = ({ imgUrl, title, desc }) => {
    return (
        <div className='category-card' >
            <div className='category-card-img-container'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
            <Link className='serviceCategories-btn' to={'/services/listings'} >Search this service</Link>
        </div>
    )
}

export default ServiceCategoriesCard
