import React from 'react'

const HowItWorksCard = ({imgUrl,title,desc}) => {
  return (
    <div className='howItWorksCard' >
            <div className='howItWorksCard-img'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
  )
}

export default HowItWorksCard
