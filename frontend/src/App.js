import React from 'react';
import { BrowserRouter as Router, Route, Routes, useMatch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './components/provider/ProviderDashboard'
import ServiceCategories from './pages/ServiceCategories';
import ServiceListings from './pages/ServiceListings';
import BookingConfirmation from './pages/BookingConfirmation';
import UserProfilePage from './pages/UserProfilePage';
import ServiceDetails from './pages/ServiceDetails';

import Navbar from './components/common/Navbar';

import axios from "axios"
import { useState, useEffect } from "react"




function App() {


  const [user, setUser] = useState(null)
  const [maids, setMaids] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/api/maids')
      .then(response => {
        setMaids(response.data)
      })
  }, [])







  

  // const match = useMatch('/services/listings/service/:id')
  // const maid = match 
  //   ? maids.find(maid => maid.id === (match.params.id))
  //   : null


  return (
    <Router >
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login  setloginUser={setUser}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
          <Route path="/services/categories" element={<ServiceCategories />} />
          <Route path="/services/listings" element={<ServiceListings categoryId={'Maid'} maids={maids} />} />
          <Route path="/services/listings/service/:id" element={<ServiceDetails maids={maids} />} />
          <Route path="/booking/confirmation" element={<BookingConfirmation />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
