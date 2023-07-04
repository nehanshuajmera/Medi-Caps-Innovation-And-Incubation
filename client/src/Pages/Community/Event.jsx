import React from 'react'
import './Event.css';

const event = () => {
  return (
    <div>
      <div className="event-container">
      <div className="event-nav">
       <div className='event-nav-text'>Event</div>
       <div>Blogs</div>
      </div>
      
        <div className="todays-event">
          <h2 className="event-today-header">Today`s Event </h2>
               <div className="today-event-box">
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot"></i> 
                 Rau Indore <br />
                
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
               
                <i className="fa-sharp fa-solid fa-location-dot"></i> 
                Rau Indore
                  <br />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt amet cupiditate repudiandae ipsa, provident quos facilis doloremque culpa molestias corporis mollitia laborum ea tempore blanditiis a et inventore assumenda voluptate.
                </p>
                
               </div>
               <div className="event-box-container">
                <h3 className='event-box-header'>
                Independence Day holiday
                </h3>
                <p className="event-box-para">
                
             
               <i className="fa-sharp fa-solid fa-location-dot"></i> 
                Rau Indore
               <br />
               
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere mollitia deserunt perspiciatis maxime nam iusto. Eaque itaque ipsa atque, accusamus, in vero dolore optio praesentium quidem voluptate dolor quo.
                </p>
                
              
               </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default event