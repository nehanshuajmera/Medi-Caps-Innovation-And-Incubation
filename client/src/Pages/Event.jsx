import React from 'react'
import './Event.css';
import { useNavigate } from 'react-router-dom';
export default function Event() {
  const navigate = useNavigate();
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

      {/* {/* <div className="event-section-3-container  event-cnt">

        <img src="./images/drawing-slider-bg.jpg" alt="" />
        <div className='event-cnt-content'>
          <div>
            <h1> <i class="fa-solid fa-eye"></i></h1>
            <h1>Visitor </h1>
            <h3>6000+</h3>
          </div>
          <div>
            <h1> <i class="fa-solid fa-eye"></i></h1>
            <h1>Registrations</h1>
            <h3>6000+</h3>
          </div>
          <div>
            <h1> <i class="fa-solid fa-eye"></i></h1>
            <h1>Speakers</h1>
            <h3>6000+</h3>
          </div>
          <div>
            <h1> <i class="fa-solid fa-eye"></i></h1>
            <h1>Participants</h1>
            <h3>6000+</h3>
          </div>
        </div> 
      </div> */}

      {/* Section - 4 */}


    </div>

  )
}