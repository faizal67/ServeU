import React from 'react';
import axios from "axios"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useMatch } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Dashboard from './components/Dashboard';
import loginService from './components/services/login';
import serviceUserServices from './components/services/serviceUser'
import providerServices from './components/services/provider'

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ServiceCategories from './pages/ServiceCategories';
import ServiceListings from './pages/ServiceListings';
import BookingConfirmation from './pages/BookingConfirmation';
import ServiceDetails from './pages/ServiceDetails';
import Registration from './pages/Registration';
import Error from './pages/Error'
import Profile from './pages/Profile';
import Location from './components/services/location';

function App() {


  const [userdata, setUserdata] = useState({});
  const [serviceUser, setServiceUser] = useState({});
  const [provider, setProvider] = useState({})
  const [providers, setProviders] = useState([])
  const [maids, setMaids] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [tiffin, setTiffin] = useState([]);
  const [grocery, setGrocery] = useState([]);
  const currAddress = Location()


  useEffect(() => {
    setMaids(providers.filter((val) => val.category === 'maid' || val.category === 'Maid'))
    setCooks(providers.filter((val) => val.category === 'Cook'))
    setGrocery(providers.filter((val) => val.category === 'Grocery'))
    setTiffin(providers.filter((val) => val.category === 'Tiffin'))
  }, [providers])

  useEffect(() => {         //effect hook for storing the state of user
    const getUser = async () => {
      const loggedUserJSON = window.localStorage.getItem('loggedServeUuser') // fetch the user detail from  lcal st
      if (loggedUserJSON) {         //check weather the user already stored in the local storage or not
        const user = JSON.parse(loggedUserJSON)
        setUserdata(user)
        loginService.setToken(user.token)         //if user found in local storage token is set for the user
      }
      else {
        try {
          const response = await axios.get("http://localhost:3001/login/sucess", { withCredentials: true });
          setUserdata(response.data.user)
        } catch (error) {
          console.log("error", error)
        }
      }
    }
    getUser()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userdata.type === 'user') {
          const response = await serviceUserServices.getServiceUser({ email: userdata.email });
          setServiceUser(response);
          console.log('serviceUser:', response);
        } else if (userdata.type === 'maid') {
          const response = await providerServices.getProvider({ email: userdata.email });
          setProvider(response);
          console.log('provider:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, perhaps set an error state or show a message to the user
      }
    };

    if (userdata) {
      fetchData();
    }

  }, [userdata]);


  useEffect(() => {
    axios.get('http://localhost:3001/api/providers')
      .then(response => {
        setProviders(response.data)
      })
  }, [])




  // const match = useMatch('/services/listings/service/:id')
  // const maid = match 
  //   ? maids.find(maid => maid.id === (match.params.id))
  //   : null


  return (
    <Router >
      <div>
        <Navbar user={userdata} setUserdata={setUserdata} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login setUserdata={setUserdata} setProvider={setProvider} setServiceUser={setServiceUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services/categories" element={<ServiceCategories />} />
          <Route path="/services/listings/maid" element={<ServiceListings categoryId={'Maid'} providers={maids} location={currAddress} />} />
          <Route path="/services/listings/tiffin" element={<ServiceListings categoryId={'Tiffin'} providers={tiffin} location={currAddress} />} />
          <Route path="/services/listings/cook" element={<ServiceListings categoryId={'Cook'} providers={cooks} location={currAddress} />} />
          <Route path="/services/listings/grocery" element={<ServiceListings categoryId={'Grocery'} providers={grocery} location={currAddress} />} />
          <Route path="/services/listings/service/:id" element={<ServiceDetails providers={providers} serviceUser={serviceUser} setServiceUser={setServiceUser} location={currAddress} />} />
          <Route path="/booking/confirmation" element={<BookingConfirmation />} />
          <Route path="/Registration" element={<Registration user={userdata} setUserdata={setUserdata} />} />
          <Route path="/profile" element={<Profile user={userdata} />} />
          <Route path="/dashboard" element={<Dashboard user={userdata} serviceUser={serviceUser} provider={provider} />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
