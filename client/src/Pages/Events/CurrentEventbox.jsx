import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CurrentEventbox({props}) {
    
  const navigate = useNavigate();
  return (
    <div>
         <div className='event-page-hero scroll-sections'>
        <div className='text-section'>
          <h1>{props.title}</h1>
          <p><b>{props.authername}</b> </p>
          <p><b>Date :</b> {props.date}</p>
          <p>{props.description.substring(1, 90)}...</p>
          <p><b>Venue:</b> {props.location} <b>Fees:</b> {props.registrationfee}₹</p>
          {/* <p>{props.time}</p> */}
          {/* <p>{props.numberofspeaker}</p> */}
          <div className='button-event'>
          <button class="button-who-am-i" onClick={()=>{navigate(`/singleevent/${props._id}`)}}> Register</button>
          <button class="button-who-am-i" onClick={()=>{navigate(`/singleevent/${props._id}`)}}> View Details 🎉</button>
          </div>
        </div>
        <div className='img-section'>
          {/* <h1>Event</h1>
          <h1>Image</h1> */}
          
          <img src={props.images} alt="event" />
        </div>
      </div>
    </div>
  )
}
