import React from 'react'
import './Upcomingeventpage.css'
// import { NavLink } from 'react-router-dom'
export default function Upcomingeventpage() {
  return (
    <div className='single-event-main-container scroll-sections'>

      {/* Section - 1 */}

      <div className="single-event-section-1 scroll-sections">
        <img className='single-event-image-one' src="./images/single-event-image-3.jpg" alt="Event" />
      </div>

      {/* Section - 2 */}

      <div className="single-event-section-2-container scroll-sections">
        <div className="single-event-section-2-description-container">
          <h5 className="single-event-section-2-description-heading">Conference on Inovation And Incubation</h5>
          <p className="single-event-section-2-description-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero error placeat beatae vel, quae fugiat, illo maiores quo aliquam consectetur. Aliquam atque, distinctio eum numquam nisi, optio itaque adipisci esse exercitationem obcaecati nesciunt iste.</p>
          <p className="single-event-section-2-description-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero error placeat beatae vel, quae fugiat, illo maiores quo aliquam consectetur. Aliquam atque, distinctio eum numquam nisi, optio itaque adipisci esse exercitationem obcaecati nesciunt iste.</p>
        </div>
        <div className="single-event-section-2-data-container">

          {/* Item - 1 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '80px' }} src="./images/date-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Date</h5>
              <p>05 November, 2022</p>
            </div>
          </div>

          {/* Item - 2 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '50px' }} src="./images/location-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Location</h5>
              <p>Medi-Caps University</p>
            </div>
          </div>

          {/* Item - 3 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '60px' }} src="./images/speaker-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Speakers</h5>
              <p>8 Professional Speakers</p>
            </div>
          </div>

          {/* Item - 4 */}
          {/* <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '60px' }} src="./images/participants-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Participants</h5>
              <p>700 Participants</p>
            </div>
          </div> */}
        </div>
      </div>
      <hr style={{ width: '90%', margin: 'auto' }} />

      {/* Section - 3 */}

      {/* <div className="single-event-section-3-container">
        <div className="single-event-section-3-description-container">
          <h5 className="single-event-section-3-description-heading">Bigup to our Sponsors</h5>
          <p className="single-event-section-3-description-paragraph">
            For further info about sponsoring, feel free to&nbsp;
            <NavLink to='/contact'>
              <span className='single-event-span-link'>Get in Touch</span>
            </NavLink>
            &nbsp;with us.
          </p>
        </div> */}

        {/* Section - 3 ( Sponsor Shoutout ) */}
        {/* <div className="single-event-section-3-sponsors">
          <div className="single-sponsor-heading">
            <h5>Event Sponsors</h5>
          </div>
          <div className="single-sponsor-image">
            <div className="single-event-sponsor-img">
              <img src="./images/Cisco-Logo.png" alt="" />
            </div>
            <div className="single-event-sponsor-img">
              <img src="./images/IBM-Logo.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
