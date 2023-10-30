import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import axios from "axios";


const API = process.env.REACT_APP_GOOGLE_API
console.log(process.env.REACT_APP_NAME)

const Location = () => {
  const [address, setAddress] = useState("");

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    const handleSearch = async () => {
      try {
        if (!coords) return;
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&key=${API}`
        );
        const data = response.data.results[0].formatted_address;
        setAddress(data);
      } catch (error) {
        console.error("Error fetching data from Google Maps API", error);
      }
    };

    if (!isGeolocationAvailable)
      alert("Your browser does not support Geolocation");
    else if (!isGeolocationEnabled) 
      alert("Geolocation is not enabled");
    else 
      handleSearch();

      
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  if (address) {
    return address;
  }

  // return <div>{address}</div>;
};

export default Location;
