import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Footer from '../components/common/Footer';
import AppliedServices from '../components/user/AppliedServices';
import CurrentServices from '../components/user/CurrentServices';
import History from '../components/user/History';
import '../assets/styles/animations.css'
import { Link } from 'react-router-dom';

const UserDashboard = ({ user }) => {
  console.log('userDahsboard',user)
  const [content, setContent] = useState('appliedServices');
  const [selected, setSelected] = useState('appliedServices');
  const selectStyle = 'font-bold bg-slate-200 rounded-md';

  return (
    <>
      <div className="flex flex-col">
        <div className='flex flex-row'>
          <div className=' flex flex-col border-r-2 border-sky-700 w-1/5 '>
              <ul className='pt-1 pl-4 gap-1 flex flex-col'>
                <h1 className='font-bold p-4'>Services</h1>
                <li className={`hover:bg-slate-100 p-2 pl-3  ${selected === 'appliedServices' && selectStyle}`} onClick={() => { setContent('appliedServices'); setSelected('appliedServices') }}>Applied Services</li>
                <li className={`hover:bg-slate-100 p-2 pl-3 ${selected === 'currentServices' && selectStyle}`} onClick={() => { setContent('currentServices'); setSelected('currentServices') }}>Current Services</li>
                <li className={`hover:bg-slate-100 p-2 pl-3 ${selected === 'history' && selectStyle}`} onClick={() => { setContent('history'); setSelected('history') }}>History</li>
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
          <div className='h-[40rem] w-4/5  flex flex-col  item-center overflow-y-scroll'>
            <CSSTransition
              in={content==='appliedServices'}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <AppliedServices user={user} />
            </CSSTransition>
            <CSSTransition
              in={content==='currentServices'}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <CurrentServices user={user} />
            </CSSTransition>
            <CSSTransition
              in={content==='history'}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <History user={user} />
            </CSSTransition>
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
}

export default UserDashboard;
