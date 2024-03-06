import React, { useEffect, useState } from 'react'
import './Contact.css';
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [section, setsection] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
    setsection("")
  }, [])

  return (
    <div >
      <div className='maincontactpage scroll-sections'>
        <h1>Who Am I ?</h1>
        <div className='main-btn'>
        <button className="button-who-am-i" onClick={()=>{navigate("/singlecontact/Start-Up founder")}}> Start-Up Founder</button>
        <button className="button-who-am-i" onClick={()=>{navigate("/singlecontact/Investor")}}> Investor</button>
        <button className="button-who-am-i" onClick={()=>{navigate("/singlecontact/General Query")}}> General Query</button>
        </div>
        <div className='main-btn'>
        <button className="button-who-am-i" onClick={()=>{navigate("/singlecontact/Idea Owner")}}> Idea Owner</button>
        <button className="button-who-am-i" onClick={()=>{navigate("/singlecontact/Student Form")}}> Student</button>
        <button className="button-who-am-i" onClick={()=>{navigate("/singlecontact/Mentor")}}> Mentor</button>
        </div>
    </div>
    </div>
  )
}
