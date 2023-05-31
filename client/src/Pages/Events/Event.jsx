// import React, { useEffect, useState } from 'react'
import './Event.css';
import { useNavigate } from 'react-router-dom';
import Pasteventbox from './Pasteventbox';
import CurrentEventbox from './CurrentEventbox';
import axios from "axios";
import { useEffect, useState } from 'react';

export default function Event() {

  const[event,setevent]=useState([]);
 
  const getevent=async ()=>{
    await axios.get("/event/allevents").then((res) =>{ setevent(res.data) }).catch((err)=>{console.log("Error",err)})
  }
  useEffect(() => {
    getevent();
  }, [])

  const navigate = useNavigate();
  return (
    <div>
      {/* .filter(item=>item) */}
      {event.map((item) => {
         return <CurrentEventbox props={item} />
      })}
      <div className='past-events-section'> 
      <div className='past-event-name-section scroll-sections'>
        <h1 style={{textAlign:"center"}}>Past Events</h1>
      </div>
      <div className='past-events scroll-sections'>
      {event.map((item) => {
        return <Pasteventbox props={item} />
      })}
      </div>
      </div>
    </div>
  )
}
