import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
       <div className='footer-content-left'>
         <h1 className='logo'>Food-Service</h1>
         <p>Food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer.</p>
         <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="" srcset="" />
            <img src={assets.twitter_icon} alt="" srcset="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
       </div>
       <div className='footer-content-center'>
           <h2>Company</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy-Policy</li>
           </ul>
       </div>
       <div className='footer-content-right'>
         <h2>Get In touch</h2>
         <ul>
            <li>1800-1000-20000</li>
            <li>food-services@gmail.com</li>
         </ul>
       </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 food-services.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
