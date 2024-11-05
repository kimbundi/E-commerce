import React from 'react'
import './Footer.css'
import footer_logo from "../asset/logo_big.png"
import instagram_icon from "../asset/instagram_icon.png"
import pintester from "../asset/pintester_icon.png"
import whatsapp from "../asset/whatsapp_icon.png"



const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>

    </div>
        <ul className='footer-links'>
<li>Company</li>
<li>Products</li>
<li>Offices</li>
<li>About</li>
<li>Contact</li>

        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
             <img src={instagram_icon} alt="" />

            </div>
            <div className="footer-icons-container">
             <img src={pintester} alt="" />

            </div>
            <div className="footer-icons-container">
             <img src={whatsapp} alt="" />

            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer