import React from 'react'

function WhyChooseUsCard({ imgUrl, title, desc }) {
    return (
        <div className='whyChooseUsCard' >
            <div className='whyChooseUsCard-img'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    )
}

export default WhyChooseUsCard
