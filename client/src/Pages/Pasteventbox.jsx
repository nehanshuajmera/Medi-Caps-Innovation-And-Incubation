import React from 'react'
import { useNavigate } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from "axios";

export default function Pasteventbox() {

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
    <div className='singlepastevent'>
        <h3>Past Events</h3>
        <h1>Event Image</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit......</p>
        <button class="button-who-am-i" onClick={()=>{navigate("/upcomingevent")}}> View Details 🎉</button>
        {/* {event.map((item) => {
         return <event id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date} time={item.time} location={item.location} numberofspeaker={item.numberofspeaker} registrationfee={item.registrationfee}/>
        })} */}
    </div>
  )
}

