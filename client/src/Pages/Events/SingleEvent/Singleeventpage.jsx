import React, { useEffect, useState } from 'react'
import './Singleeventpage.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { NavLink } from 'react-router-dom'
export default function Singleeventpage() {
  const { id } = useParams();
  const [event, setevent] = useState(
      {
        images:"",
        description:"",
        title:"",
        authername:"",
        date:"",
        time:"",
        location:"",
        numberofspeaker:"",
        registrationfee:"",
        like:0,
        registrationstatus:"ongoing",
        comments:[]
      });
    const apicall=async ()=>{
        await axios.get(`/event/singleevent/${id}`).then((res) => { setevent(res.data) }).catch((err)=>{console.log(err)});
      }
    
      useEffect(() => {
        apicall();
      }, [])

  return (
    <div className='single-event-main-container scroll-sections'>

      {/* Section - 1 */}

      <div className="single-event-section-1">
        <img className='single-event-image-one' src={event.images} alt="" />
      </div>

      {/* Section - 2 */}
      <div className="single-event-section-2-description-container">
          <h5 className="single-event-section-2-description-heading">{event.title}</h5>
          <p className="single-event-section-2-description-paragraph">{event.description}</p>
        </div>

      <div className="single-event-section-2-container">
       
        <div className="single-event-section-2-data-container">
          {/* Item - 1 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '80px' }} src="../images/date-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Date</h5>
              <p>{event.date}</p>
              <p>{event.time}</p>
            </div>
          </div>

          {/* Item - 2 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '50px' }} src="../images/location-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Location</h5>
              <p>{event.location}</p>
            </div>
          </div>

          {/* Item - 3 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '60px' }} src="../images/speaker-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Speakers</h5>
              <p>{event.numberofspeaker} Professional Speakers</p>
            </div>
          </div>

          {/* Item - 4 */}
          <div className="section-2-small-data-items">
            <div className="small-data-items-img">
              <img style={{ width: '60px' }} src="../images/participants-event.png" alt="" />
            </div>
            <div className="small-data-items-text">
              <h5>Participants</h5>
              <p>700 Participants</p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: '90%', margin: 'auto' }} />

        <div className="single-event-section-4-container scroll-sections">
          <div className="section-4-single-event-heading">
            <h5>Glimpses From The Event</h5>
            <p>For more photos and videos visit our social hubs.</p>
          </div>
          <div className="single-event-memories">
            <div className="memories-album-single-event">
              <img src="http://mutationmedia.net/EVENTS/img/15.jpg" alt="Loading Error" />
            </div>
            <div className="memories-album-single-event">
              <img src="http://mutationmedia.net/EVENTS/img/13.jpg" alt="Loading Error" />
            </div>
            <div className="memories-album-single-event">
              <img src="http://mutationmedia.net/EVENTS/img/14.jpg" alt="Loading Error" />
            </div>
            <div className="memories-album-single-event">
              <img src="http://mutationmedia.net/EVENTS/img/16.jpg" alt="Loading Error" />
            </div>
            <div className="memories-album-single-event">
              <img src="http://mutationmedia.net/EVENTS/img/17.jpg" alt="Loading Error" />
            </div>
            <div className="memories-album-single-event">
              <img src="http://mutationmedia.net/EVENTS/img/12.jpg" alt="Loading Error" />
            </div>
          </div>
        </div>
      </div>
  )
}
