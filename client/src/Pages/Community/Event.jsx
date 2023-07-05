import React from 'react'
import './Event.css';
import Image from './Image'
import { useNavigate } from "react-router-dom";

function CustomHook() {
  const navigate = useNavigate();

  // ... custom hook logic

  return navigate;
}

const event = () => {
  const navigate = CustomHook();
  return (
    <div>
      <div className="event-container">
      <div className="event-nav">
       <div className='event-nav-text' onClick={()=>{navigate("/Event")}}>Event</div>
       <div style={{cursor:"pointer"}} onClick={() => {navigate("/Article")}}>Blogs</div>
      </div>
      <Image/>
        <div className="todays-event">
          <h2 className="event-today-header">Today`s Event </h2>
               <div className="today-event-box">
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot" style={{padding:"0px 10px 0px 0px"}}></i> Rau Indore <br />
                
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa optio in mollitia doloremque ab error obcaecati modi, similique id dicta ea voluptatibus, dignissimos fuga quae facilis vel iure minus maxime.</p>
               </div>
               </div>
               </div>
       
        <div className="todays-event">
          <h2 className="event-tommarow-header">Tommoraw Event </h2>
               <div className="today-event-box">
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot"></i> 
              rau indore
                 
                </p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut dolor deserunt, saepe similique tempora sunt ad sed aliquam laboriosam minima, itaque distinctio. Id distinctio exercitationem consequuntur est eaque doloribus pariatur!
               </div>
               <div className="event-box-container">
                <h3 className='event-box-header'>
              
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot" style={{padding:"0px 10px 0px 0px"}}></i> Rau Indore <br />
                
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa optio in mollitia doloremque ab error obcaecati modi, similique id dicta ea voluptatibus, dignissimos fuga quae facilis vel iure minus maxime.</p>
               </div>
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot" style={{padding:"0px 10px 0px 0px"}}></i> Rau Indore <br />
                
                </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa optio in mollitia doloremque ab error obcaecati modi, similique id dicta ea voluptatibus, dignissimos fuga quae facilis vel iure minus maxime.</p>
              
               </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default event