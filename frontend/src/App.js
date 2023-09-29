import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import ProviderDashboard from './components/provider/ProviderDashboard'
import ServiceCategories from './pages/ServiceCategories';
import ServiceListings from './pages/ServiceListings';
import BookingConfirmation from './pages/BookingConfirmation';
import UserProfilePage from './pages/UserProfilePage';

import Navbar from './components/common/Navbar'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/provider/dashboard" element={<ProviderDashboard />} />
          <Route path="/service/categories" element={<ServiceCategories />} />
          <Route path="/service/listings" element={<ServiceListings />} />
          <Route path="/booking/confirmation" element={<BookingConfirmation />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
