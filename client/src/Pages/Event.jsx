import React, { useEffect, useState } from 'react'
import './Event.css';
import { useNavigate } from 'react-router-dom';
export default function Event() {
  const navigate = useNavigate();
  const [visitor, setvisitor] = useState(0);
  
  useEffect(() => {
    if(visitor!==6000){
      setvisitor(visitor+1);    
    }
  },[visitor])
  
  useEffect(() => {
    setvisitor(1000);    
  },[])
  

  return (
    <div className="event-main-container">

      {/* section - 1 */}

      <div className="event-section-1">
        
        {/* x */}
        {/* <img className='image-event-1' src="./images/event-main-herosection.jpeg" alt="" /> */}
        {/* <img className='image-event-1' src="./images/events-png-event.png" alt="" /> */}
        <h2 style={{ fontSize: '50px', color: 'Black', padding: '20px', textAlign: 'center' }}>Events</h2>
      </div>

      {/* Section - 2 */}

      <div className="event-section-2-container">
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

      <div className="event-section-3-container  event-cnt">

        <img src="./images/drawing-slider-bg.jpg" alt="" />
        <div className='event-cnt-content'>
          <div>
            <h1><i class="fa-solid fa-laptop"></i></h1>
            <h1>Visitor </h1>
            <h3>{visitor}+</h3>
          </div>
          <div>
            <h1><i class="fa-solid fa-person"></i></h1>
            <h1>Registrations</h1>
            <h3>{visitor-932}+</h3>
          </div>
          <div>
            <h1><i class="fa-solid fa-microphone"></i></h1>
            <h1>Speakers</h1>
            <h3>{visitor-1000}+</h3>
          </div>
          <div>
            <h1><i class="fa-solid fa-people-group"></i></h1>
            <h1>Participants</h1>
            <h3>{visitor-678}+</h3>
          </div>
        </div>
      </div>

      {/* Section - 4 */}

      <div className="event-section-4-container">
        <div className="section-4-heading">
          <h3>Event Sponsors</h3>
        </div>
        <div className="logo-sponsors-container">
          <div className="sponsors-image"><img src="./images/apple-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="./images/tcs-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="./images/amazon-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="./images/Cisco-Logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/ford-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/IBM-Logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/hyundai-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/cocacola-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/tech-mahindra-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/google-logo.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/netflix.png" alt="" /></div>
          <div className="sponsors-image"><img src="/images/reebok-logo.png" alt="" /></div>
        </div>
      </div>

    </div>

  )
}