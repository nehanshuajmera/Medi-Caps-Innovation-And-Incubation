import React from 'react'
import "../Contact.css"
import { useNavigate } from 'react-router-dom'

export default function MainContactpage(props) {
  const navigate=useNavigate();
  return (
    <div className='maincontactpage scroll-sections'>
        <h1>Who Am I ?</h1>
        <div className='main-btn'>
        <button class="button-who-am-i" onClick={()=>{navigate("/startupfounder")}}> Start-Up Founder</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/investor")}}> Investor</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/generalquery")}}> General Query</button>
        </div>
        <div className='main-btn'>
        <button class="button-who-am-i" onClick={()=>{navigate("/ideaowner")}}> Idea Owner</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/studentform")}}> Student</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/mentor")}}> Mentor</button>
        </div>
    </div>
  )
}
