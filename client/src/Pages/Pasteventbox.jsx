import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Pasteventbox() {
  const navigate = useNavigate();
  return (
    <div className='singlepastevent'>
        <h3>Past Events</h3>
        <h1>Event Image</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit......</p>
        <button class="button-who-am-i" onClick={()=>{navigate("/upcomingevent")}}> View Details 🎉</button>
    </div>
  )
}
