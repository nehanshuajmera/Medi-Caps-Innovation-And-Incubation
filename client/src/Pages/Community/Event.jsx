import React  from 'react'
import './Event.css';
import Image from './Image'
import Singleeventbox from './Singleeventbox';
import ComunityHeader from './ComunityHeader';

export default function Event({event}) {
  return (
    <div>
      <ComunityHeader/>
      <div className="event-container">
      <Image/>
        <div className="todays-event">
          <h2 className="event-today-header">Upcomming Events </h2>
          <div className="today-event-box">
        {event.filter(item => item.featured==="True").map(item=>{
          return <Singleeventbox id={item._id} title={item.title} description={item.description} date={item.date} location={item.location} />
        })}
          </div>
           </div>
       
        <div className="todays-event">
          <h2 className="event-tommarow-header">Past Events </h2>
               <div className="today-event-box">
               {event.filter(item => item.featured!=="True").map(item=>{
          return <Singleeventbox id={item._id} title={item.title} description={item.description} date={item.date} location={item.location} />
        })}
        </div>
        </div>
      </div>
    </div>
  )
}
