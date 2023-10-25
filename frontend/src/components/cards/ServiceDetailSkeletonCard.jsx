import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ServiceDetailSkeletonCard = () => {
    return (
        <div className="serviceDetails-profile">
            <div className="profile-header">
                <div className="profile-header-left">
                    <div className="profile-img-container">
                        <Skeleton  circle='true' height={'12rem'}/>
                    </div>
                    <br />
                    <br />
                    <p>
                        <span className='serviceDetails-content'> <Skeleton  width={100}/> </span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton  width={150}/> </span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton  width={400}/> </span>
                    </p>

                </div>
                <div className="profile-header-right">

                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={200}/> </span>
                    </p>

                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={220}/> </span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={330}/> </span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={400}/></span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={400}/></span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={400}/></span>
                    </p>
                    <p>
                        <span className='serviceDetails-content'> <Skeleton width={400}/></span>
                    </p>
                 
                </div>
            </div>
            <hr />
            <div className="serviceDetail-about">
                <div>
                    <div className='serviceDetails-content'> <Skeleton /></div>
                </div>
                <p>
                    <span className='serviceDetails-content'> <Skeleton /></span>
                </p>
                <p>
                    <span className='serviceDetails-content'> <Skeleton /></span>
                </p>
                <p>
                    <span className='serviceDetails-content'> <Skeleton /></span>
                </p>
                <p>
                    <span className='serviceDetails-content'> <Skeleton /></span>
                </p>
            </div>
        </div>
    )
}

export default ServiceDetailSkeletonCard
