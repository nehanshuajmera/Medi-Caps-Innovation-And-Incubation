import React from 'react'
import './Event.css';
import { useNavigate } from 'react-router-dom';
export default function Event() {
  const navigate = useNavigate();
  
  return (
    <div className="event-main-container">

      {/* section - 1 */}

      {/* Section - 2 */}

      <div className="event-section-2-container scroll-sections">
        <div className="left-container-event-section-2">
          <div className="left-event-section-2-img-container">
            <div className="upcoming-event-container" onClick={() => { navigate("/upcomingevent") }}>
              {/* Upcoming Background Image Container */}
            </div>
          </div>
          <div className="left-event-section-2-after-image-container">

            <div className="left-event-section-2-text-container">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }} onClick={() => { navigate("/upcomingevent") }}>Event Name</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>

            <div className="event-section-2-register-button">
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Register</span>
              </button>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Details</span>
              </button>
            </div>
          </div>
        </div>
        <div className="right-container-event-section-2">
          <div className="section-2-right-sub-container">
            <div className="section-2-right-sub-container-img">
              <div className="past-event-container1" onClick={() => { navigate("/Singleevent") }}>
                {/* Upcoming Background Image Container */}
              </div>
            </div>
            <div className="section-2-right-sub-container-text">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }} onClick={() => { navigate("/singleevent") }}>Event Name</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </div>
          <div className="section-2-right-sub-container">
            <div className="section-2-right-sub-container-img">
              <div className="past-event-container2" onClick={() => { navigate("/singleevent") }}>
                {/* Upcoming Background Image Container */}
              </div>
            </div>
            <div className="section-2-right-sub-container-text">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }} onClick={() => { navigate("/singleevent") }}>Event Name</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </div>
          <div className="section-2-right-sub-container">
            <div className="section-2-right-sub-container-img">
              <div className="past-event-container3" onClick={() => { navigate("/singleevent") }}>
                {/* Upcoming Background Image Container */}
              </div>
            </div>
            <div className="section-2-right-sub-container-text">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }} onClick={() => { navigate("/singleevent") }}>Event Name</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 3 */}

      {/* Section - 4 */}

    </div>

  )
}