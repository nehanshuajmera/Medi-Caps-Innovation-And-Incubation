import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <div className="pg-footer">
       
        <div className="footer-section-1"> 
        <div className="footer-section-title">MII Foundation</div>
          <div className="footer-social-link">
          <i class="fa-brands fa-linkedin fa-2xl" ></i>
          <i class="fa-brands fa-instagram fa-2xl"></i>
          <i class="fa-brands fa-square-github fa-2xl"></i>
          <i class="fa-brands fa-square-youtube fa-2xl"></i>
          </div>
          
          {/* <div className="footer-logo">
            <img src="./images/Black logo - no background.png" alt="ccc" />
          </div> */}
          <div className="getintouch-section">
           <h2>GET IN TOUCH</h2>
           </div>
        </div>
           
        <div className="copyright-section">
        ©2023 | Medi-Caps Software Development Cell | All rights reserved.
        </div> 
      </div>
    </div>
  )
}
 

