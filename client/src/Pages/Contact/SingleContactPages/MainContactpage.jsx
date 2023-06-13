import React from 'react'
import "../Contact.css"
import { useNavigate } from 'react-router-dom'

export default function MainContactpage(props) {
  const navigate=useNavigate();
  return (
    <div className='maincontactpage scroll-sections'>
        <h1>Who Am I ?</h1>
        <div className='main-btn'>
        <button class="button-who-am-i" onClick={()=>{navigate("/singlecontact/startup founder")}}> Start-Up Founder</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/singlecontact/Investor")}}> Investor</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/singlecontact/General Query")}}> General Query</button>
        </div>
        <div className='main-btn'>
        <button class="button-who-am-i" onClick={()=>{navigate("/singlecontact/Idea Owner")}}> Idea Owner</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/singlecontact/Student Form")}}> Student</button>
        <button class="button-who-am-i" onClick={()=>{navigate("/singlecontact/Mentor")}}> Mentor</button>
        </div>
    </div>
  )
}
