import React from 'react'

function OfferCard({ imgUrl, title, desc }) {
    return (
        <div className='offer-card' >
            <div className='offerCard-img-container'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default OfferCard
