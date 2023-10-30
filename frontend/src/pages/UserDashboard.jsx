import React, { useState } from 'react'
import option from '../assets/images/icon_option.svg'
import close from '../assets/images/icon_close.svg'
import UpcomingBookingCard from '../components/cards/UpcomingBookingCard'
import Footer from '../components/common/Footer'



const UserDashboard = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
    <div className="userDashboard-section">
      <div className={!isOpen ? 'userDashboard-hidden userDashboard-sideBar-section' : 'userDashboard-sideBar-section'}>
        <p>Upcoming Bookings</p>
        <p>Service History</p>
        <p>Account Settings</p>
        <p>Need Assistance</p>
        <p>Contact Us</p>
      </div>
      <div className="userDashboard-content-section">
        <img className='userDashboard-toggle-btn' src={!isOpen ? option : close} height={'30px'} width={'30px'} onClick={() => setIsOpen(!isOpen)} />
        <h1 className='userDashboard-subHeading section-heading first-heading' >Dashboard</h1>
        <p className='userDashboard-heading-subtext'>
          <span className='userDashboard-welcome'>Welcome back $[user]</span>, to your personalized User Dashboard. Here, you can manage your bookings, view your service history, and update your account settings.
        </p>

        <h1 className='userDashboard-subHeading section-heading'>Upcoming Bookings</h1>
        <div className='upcomingBookingCard-container'>
          <UpcomingBookingCard />
          <UpcomingBookingCard />
          <UpcomingBookingCard />


        </div>

        <h1 className='userDashboard-subHeading section-heading'>Service History</h1>
        <div className='upcomingBookingCard-container'>
          <UpcomingBookingCard />
          <UpcomingBookingCard />
          <UpcomingBookingCard />


        </div>

        {/* Service: [Service Name]
        Provider: [Provider Name]
        Date: [Service Date]
        Rating: [Service Rating]

        Service History Entry 2

        Service: [Service Name]
        Provider: [Provider Name]
        Date: [Service Date]
        Rating: [Service Rating]
        Service History Entry 3

        Service: [Service Name]
        Provider: [Provider Name]
        Date: [Service Date]
        Rating: [Service Rating] */}

        <h1 className='userDashboard-subHeading section-heading'>Account Settings</h1>
        <form action="" className='userDashboard-setting-form'>
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Email:</label>
          <input type="text" />
          <label htmlFor="">Phone Number:</label>
          <input type="phone" />
          <label htmlFor="">Change Password:</label>
          <input type="text" />
          <button>Save</button>
        </form>

        <h1 className='userDashboard-subHeading section-heading'>Need Assistance?</h1>

        <p>If you have any questions or need support, please don't hesitate to reach out to our customer service team. We're here to ensure you have a seamless experience with our service booking platform.</p>

        <h1 className='userDashboard-subHeading section-heading'>Contact Us</h1>
        <p>Email: support@serveU.com</p>
        <p>Phone: +91-982343423</p>
        

      </div>
    </div>
      <Footer />
    </>
  )
}

export default UserDashboard
