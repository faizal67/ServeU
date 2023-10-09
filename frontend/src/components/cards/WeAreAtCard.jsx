import React from 'react'

const WeAreAtCard = ({imgUrl,title}) => {
    return (
        <div className='weAreAt-card' >
            <div className='weAreAt-card-img'>
                <img src={imgUrl} alt='image'></img>
            </div>
            <h1>{title}</h1>
        </div>
    )
}

export default WeAreAtCard
