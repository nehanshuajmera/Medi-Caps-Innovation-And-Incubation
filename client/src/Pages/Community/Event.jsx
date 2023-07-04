import React from 'react'
import './Event.css';

const event = () => {
  return (
    <div>
      <div className="event-container">
      
        <div className="todays-event">
          <h2 className="event-today-header">Today`s Event </h2>
               <div className="today-event-box">
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot"></i> 
               Rau Indore
                  <li>Holiday</li>
                </p>
               </div>
               </div>
               </div>
       
        <div className="tommarow-event">
          <h2 className="event-tommarow-header">tomarow event </h2>
               <div className="today-event-box">
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                {/* <i className="fa-sharp fa-solid fa-location-dot"></i>  */}
               {/* <p className="rau-class"> Rau Indore</p> */}
              rau indore
                 
                </p>
                 <li>Holiday</li>
               </div>
               <div className="event-box-container">
                <h3 className='event-box-header'>
               {/* <i className="fa-regular fa-location-dot" style={{fontweight: 'bold'}}></i> */}
                {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-location-dot" /> */}
                Independence Day holiday
                </h3>
                <p className="event-box-para">
               
                <i className="fa-sharp fa-solid fa-location-dot"></i> 
                Rau Indore
                  <li>Holiday</li>
                </p>
                
               </div>
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot">  </i> 
                Rau Indore
                  <li>Holiday</li>
                </p>
                
              
               </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default event