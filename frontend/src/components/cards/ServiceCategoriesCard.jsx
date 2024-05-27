import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCategoriesCard = ({ imgUrl, title, desc }) => {
    var category = '';
    switch (title) {
        case 'Home Cleaning Maid':
            category = 'maid'
            break;
        case 'Grocery Shopping':
            category = 'grocery'
            break;
        case 'Tiffin and Mess':
            category = 'tiffin'
            break;
        case 'Cook and Chef':
            category = 'cook'
            break;
        default:
            category = 'maid'
            break;
    }
    return (
        <div className='category-card' >
            <div className='category-card-header'>
            <div className='category-card-img-container'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1>{title}</h1>
            </div>
            <p>{desc}</p>
            <Link className='serviceCategories-btn' to={`/services/listings/${category}`} >Search this service</Link>
        </div>
    )
}

export default ServiceCategoriesCard
