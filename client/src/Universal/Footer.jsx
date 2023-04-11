import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.css'
export default function Footer() {
  return (
    <div>
      <div className="pg-footer">
        <footer className="footer">
          <div className="footer-body-content">
            
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <NavLink className="footer-copyright-link" to="" target="_self"> ©2023 | Medi-Caps Software Development Cell | All rights reserved. </NavLink>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
  
}
