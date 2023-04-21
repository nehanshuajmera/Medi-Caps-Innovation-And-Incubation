import React from 'react'
import './Event.css';
import { useNavigate } from 'react-router-dom';
import Pasteventbox from './Pasteventbox';
export default function Event() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='event-page-hero scroll-sections'>
        <div className='text-section'>
          <h1>EVENTS NAME</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dolores quod neque labore quidem, saepe aperiam delectus odio consequuntur excepturi nostrum quos, soluta dolore id culpa enim ullam, praesentium commodi!</p>
          <div className='button-event'>
          <button class="button-who-am-i" onClick={()=>{navigate("/singleevent")}}> Register</button>
          <button class="button-who-am-i" onClick={()=>{navigate("/singleevent")}}> View Details 🎉</button>
          </div>
        </div>
        <div className='img-section'>
          <h1>Event</h1>
          <h1>Image</h1>
        </div>
      </div>
      <div className='past-events-section'> 
      <div className='past-event-name-section scroll-sections'>
        <h1>Past Events</h1>
      </div>
      <div className='past-events scroll-sections'>
         <Pasteventbox/>
         <Pasteventbox/>
         <Pasteventbox/>
      </div>
      <div className='past-events scroll-sections'>
         <Pasteventbox/>
         <Pasteventbox/>
         <Pasteventbox/>
      </div>
      </div>
    </div>
  )
}