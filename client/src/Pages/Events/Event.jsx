// import React, { useEffect, useState } from 'react'
import './Event.css';
import { useNavigate } from 'react-router-dom';
import Pasteventbox from './Pasteventbox';
import CurrentEventbox from './CurrentEventbox';
// import axios from "axios";

export default function Event() {

// const Event = () => {
//   const[event,setevent]=useState();
 
// const getevent=async ()=>{
//     await axios.get(".../backend/router/event").then((res) =>
//      { setevents(res.data) });
//   }
//   useEffect(() => {
//     getevent();
//   }, [])



  const navigate = useNavigate();
  return (
    <div>
     <CurrentEventbox/>
      <div className='past-events-section'> 
      <div className='past-event-name-section scroll-sections'>
        <h1>Past Events</h1>
      </div>
      <div className='past-events scroll-sections'>
         <Pasteventbox/>
         <Pasteventbox/>
         <Pasteventbox/>
         <Pasteventbox/>
         
      </div>
      <div className='past-events scroll-sections'>
         <Pasteventbox/>
         <Pasteventbox/>
         <Pasteventbox/>
         {/* {events.map((item) => {
         return <events id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date} time={item.time} location={item.location} numberofspeaker={item.numberofspeaker} registrationfee={item.registrationfee}/>
        })} */}
      </div>
      </div>
    </div>
  )
}
