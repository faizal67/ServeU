import React from 'react';
import ProviderRegistration from '../components/forms/ProviderRegistration';
import background from '../assets/images/img_listing_header.png';

const Registration = ({ user , setUserdata}) => {
  return (
    <div
      className="flex flex-col items-center "
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="pt-5 text-blue-900 font-bold text-3xl">Registration</h1>
      <ProviderRegistration user={user} setUserdata={setUserdata} />
    </div>
  );
};

export default Registration;
