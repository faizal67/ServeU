import React from 'react'

function OfferCard({ imgUrl, title, desc }) {
    return (
        <div className='offer-card' >
            <div className='offerCard-img-container'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1 className='font-bold text-blue-900 text-2xl m-2'>{title}</h1>
            <p className='text-gray-900'>{desc}</p>
        </div>
    )
}

export default OfferCard
