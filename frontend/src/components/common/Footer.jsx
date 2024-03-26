import React from 'react'
import { Link } from 'react-router-dom'
import  Facebook from '../../assets/images/Facebook.svg'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='flex mx-20 py-20'>
      <div className='basis-2/6 '>
        <img className="w-30 h-10" src={Logo} alt="Company name" />
        <p className="avz awo axr">Making the world a better place through constructing elegant hierarchies.</p>
        
      </div>
      <div className='basis-1/6 flex flex-col space-y-2'>
        <p className='font-bold my-2'>Solution</p>
        <p className='text-slate-600'>Maid</p>
        <p className='text-slate-600'>Laundry</p>
        <p className='text-slate-600'>Tiffin</p>
        <p className='text-slate-600'>Cook</p>
      </div>
      <div className='basis-1/6 flex flex-col space-y-2'>
        <p className='font-bold my-2'>Support</p>
        <p className='text-slate-600'>Pricing</p>
        <p className='text-slate-600'>Documentation</p>
        <p className='text-slate-600'>Guides</p>
        <p className='text-slate-600'>Help</p>
      </div>
      <div className='basis-1/6 flex flex-col space-y-2'>
        <p className='font-bold my-2'>Solution</p>
        <p className='text-slate-600'>Maid</p>
        <p className='text-slate-600'>Laundry</p>
        <p className='text-slate-600'>Tiffin</p>
        <p className='text-slate-600'>Cook</p>
      </div>
      <div className='basis-1/6  flex flex-col space-y-2'>
        <p className='font-bold my-2'>Solution</p>
        <p className='text-slate-600'>Maid</p>
        <p className='text-slate-600'>Laundry</p>
        <p className='text-slate-600'>Tiffin</p>
        <p className='text-slate-600'>Cook</p>
      </div>

    </div>
  )
}


// function Footer() {
//   return (
//     <footer className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto text-center">
//         <p>Get connected with us on social networks:</p>
//         <a href="#!" className="text-blue-400 hover:underline">Link 1</a> |
//         <a href="#!" className="text-blue-400 hover:underline">Link 2</a> |
//         <a href="#!" className="text-blue-400 hover:underline">Link 3</a> |
//         <a href="#!" className="text-blue-400 hover:underline">Link 4</a>
//       </div>
//       <div className="container mx-auto text-center mt-4">
//         <p>Company name</p>
//         <p>New York, NY 10012, US</p>
//         <p>info@example.com</p>
//         <p>+01 234 567 88</p>
//         <p>+01 234 567 89</p>
//         <p>© 2021 Copyright: MDBootstrap.com</p>
//       </div>
//     </footer>
//   );
// }

// const Footer = () => {
//   return (
//     <div className='footer-section'>
//       <div className='footer-link-section'>
//         <div className="ourServices">
//           <h4>Our Services</h4>
//           <Link className="footer-link" to='/'>Mess/Tiffin</Link>
//           <Link className="footer-link" to='/'>Maid</Link>
//           <Link className="footer-link" to='/'>Grocery</Link>
//           <Link className="footer-link" to='/'>Loundry</Link>
//           <hr />
//         </div>
//         <div className="aboutUs">
//           <h4>About us</h4>
//           <Link className="footer-link" to='/'>About us</Link>
//           <Link className="footer-link" to='/'>Connect with us</Link>
//           <Link className="footer-link" to='/'>Mail</Link>
//           <Link className="footer-link" to='/'>Developer</Link>
//           <hr />
//         </div>
//         <div className="JoinUs">
//           <h4>join us</h4>
//           <Link className="footer-link" to='/'>Join us</Link>
//           <Link className="footer-link" to='/'>Register Yourself</Link>
//           <Link className="footer-link" to='/'>Make your Career</Link>
//           <Link className="footer-link" to='/'>Start your bussiness</Link>
//           <hr />
//         </div>
//       </div>

//       <p className='copywrite'> Copywrite &copy; 2023 ServeU. All Right Reserved</p>
//     </div>
//   )
// }

export default Footer
