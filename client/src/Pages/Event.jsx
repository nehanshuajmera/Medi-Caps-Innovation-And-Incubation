import React from 'react'
import './Event.css';
export default function Event() {
  return (
    <div className="event-main-container">

      {/* section - 1 */}

      <div className="event-section-1">
        <img className='image-event-1' src="./images/events-png-event.png" alt="" />
        {/* <h2 style={{color: 'white', padding: '50px'}}>Events</h2> */}
      </div>

      {/* Section - 2 */}

      <div className="event-section-2-container">
        <div className="left-container-event-section-2">
          <div className="left-event-section-2-img-container">
            <img src="./images/Events-1-cropped1.jpg" alt="" />
          </div>
          <div className="left-event-section-2-text-container">
            <h3 style={{ fontSize: '25px', fontWeight: '400' }}>Event Name : TED Talk Show</h3>
            <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
            <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
          </div>
        </div>
        <div className="right-container-event-section-2">
          <div className="section-2-right-sub-container">
            <div className="section-2-right-sub-container-img">
              <img src="./images/upcoming-events-photo.jpg" alt="" />
            </div>
            <div className="section-2-right-sub-container-text">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }}>Event Name : TED Talk Show</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </div>
          <div className="section-2-right-sub-container">
            <div className="section-2-right-sub-container-img">
              <img src="./images/upcoming-events-photo.jpg" alt="" />
            </div>
            <div className="section-2-right-sub-container-text">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }}>Event Name : TED Talk Show</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </div>
          <div className="section-2-right-sub-container">
            <div className="section-2-right-sub-container-img">
              <img src="./images/upcoming-events-photo.jpg" alt="" />
            </div>
            <div className="section-2-right-sub-container-text">
              <h3 style={{ fontSize: '25px', fontWeight: '400' }}>Event Name : TED Talk Show</h3>
              <p style={{ fontSize: '16px', fontWeight: '300' }}>Event short Description or tagline </p>
              <p style={{ fontSize: '16px', fontWeight: '300' }}> Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 3 */}

      <div className="event-section-3-container">
        <img src="./images/drawing-slider-bg.jpg" alt="" />
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