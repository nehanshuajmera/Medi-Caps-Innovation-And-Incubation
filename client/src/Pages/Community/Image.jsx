import React, { useEffect, useState } from 'react'
import "./Image.css";
import axios from 'axios'

const Image = () => {
  const[eventbaner,seteventbaner]=useState([]);
  
  const geteventbanar=async ()=>{
    await axios.get("/event/eventbanar/allbanar").then((res) =>{seteventbaner(res.data)})
    .catch((err)=>{console.log("Error",err)})
  }
  useEffect(() => {
    geteventbanar();
  }, [])
  


  return (
    <div>        
       <img src={eventbaner[0]?.image} className='event-image' alt="" style={{width:"100%",height:"100%"}} />
      </div>

  )
}

export default Image