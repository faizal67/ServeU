import React, { useState, useEffect } from 'react';
import Footer from '../components/common/Footer';
import ServiceRequests from '../components/maid/ServiceRequests';
import ServiceListing from '../components/maid/ServiceListing';
import CurrentServices from '../components/maid/CurrentServices';
import History from '../components/maid/History';
import { Link } from 'react-router-dom';

const selectStyle = 'font-bold bg-slate-200 rounded-md';

const NavItem = ({ content, setContent, selected, setSelected, text }) => {
  return (
    <li
      className={`hover:bg-slate-100 p-2 pl-3 cursor-pointer ${selected === content && selectStyle}`}
      onClick={() => { setContent(content); setSelected(content); }}
    >
      {text}
    </li>
  );
};

const MaidDashboard = ({ user, provider }) => {
  const [content, setContent] = useState('serviceRequest');
  const [selected, setSelected] = useState('serviceRequest');
  const [currentContent, setCurrentContent] = useState(content);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (content !== currentContent) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentContent(content);
        setTransitioning(false);
      }, 300); // Duration of the transition
    }
  }, [content, currentContent]);

  return (
    <>
      <div className="flex flex-col">
        <div className='flex flex-row'>
          <div className='flex flex-col border-r-2 border-sky-700 w-1/5'>
            <ul className='pt-1 pl-4 gap-1 flex flex-col'>
              <h1 className='font-bold p-4'>Services</h1>
              <NavItem content={'serviceRequest'} setContent={setContent} selected={selected} setSelected={setSelected} text={'Service Requests'} />
              <NavItem content={'currentServices'} setContent={setContent} selected={selected} setSelected={setSelected} text={'Current Services'} />
              <NavItem content={'serviceListing'} setContent={setContent} selected={selected} setSelected={setSelected} text={'Service Listing'} />
              <NavItem content={'history'} setContent={setContent} selected={selected} setSelected={setSelected} text={'History'} />
            </ul>
            <hr />
            <ul className='pt-1 pl-4 gap-1 flex flex-col'>
              <h1 className='font-bold p-4'>Personal</h1>
              <Link className="hover:bg-slate-100 p-2 pl-3" to='/profile'>Profile </Link>
              <li className="hover:bg-slate-100 p-2 pl-3">Peoples</li>
              <li className="hover:bg-slate-100 p-2 pl-3">Billing & Plans</li>
              <li className="hover:bg-slate-100 p-2 pl-3">Privacy Setting</li>
            </ul>
          </div>
          <div className='h-[40rem] w-4/5 flex flex-col items-center overflow-y-scroll'>
            <div className={`transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
              {currentContent === 'serviceRequest' && <ServiceRequests provider={provider} />}
              {currentContent === 'currentServices' && <CurrentServices provider={provider} />}
              {currentContent === 'serviceListing' && <ServiceListing provider={provider} />}
              {currentContent === 'history' && <History provider={provider} />}
            </div>
          </div>
        </div>
        <div className='p-10'>
          <h1 className='userDashboard-subHeading section-heading'>Need Assistance?</h1>
          <p>If you have any questions or need support, please don't hesitate to reach out to our customer service team. We're here to ensure you have a seamless experience with our service booking platform.</p>
          <h1 className='userDashboard-subHeading section-heading'>Contact Us</h1>
          <p>Email: support@serveU.com</p>
          <p>Phone: +91-982343423</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MaidDashboard;
