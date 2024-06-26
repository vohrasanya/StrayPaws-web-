import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Stray Paws is a comprehensive application dedicated to animal welfare and adoption. Designed to bridge the gap between homeless animals and loving homes, Stray Paws offers a user-friendly platform where users can browse profiles of adoptable pets from various shelters and rescue organizations. Feel free to reach us at our social media handles!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>home</li>
                    <li>adopt</li>
                    <li>donate</li>
                    <li>food & care</li>
                    <li>contact us</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH </h2>
                <ul>
                <li>+99999999</li>
                <li>contact@straypaws.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyrights 2024 @Straypaws - All rights reserved</p>

    </div>
  )
}

export default Footer