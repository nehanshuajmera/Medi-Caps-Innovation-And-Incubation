import React from 'react'
import './testimonials.css'
export default function Testimonials() {
  
  return (
    <div className='testimonial-box'>
      <div className='testimonial-inner-box'>
        <h1>Testimonials</h1>
        <div className='testimonial-text-content'>
        <p>"We came to ZenX as a well-established company with a goal to strengthen our presence in the blockchain field. We were impressed with the level of expertise and practical experience, both on technical and administrative level. Dimitra is a very ambitious project - we are happy to find a partner that has the knowledge and ability to support our mission of solving global hunger."</p>
      </div>
      <div className='testimonial-bottom-section'>
      
      <div className="testimonal-name-avtar">
           <div className='testimonial-avtar-container'>
          <img src='https://www.zenxlabs.io/assets/img/testimonials/trask.jpg' alt='' />         
          </div>
          <div className='testimonial-name-container'>
            <h3>Jon Trask, CEO</h3>
            <h3 style={{color:"#931727"}}>Dimitra Technology</h3>
          </div>
        </div>
         
          <div className='testimonial-next-prev-option'>
            <div className='nxt-prv-btn'> 
          <i className="fa-solid fa-arrow-left "></i>
          </div>
          <div className='nxt-prv-btn'> 

          <i className="fa-solid fa-arrow-right "></i>
          </div>
          </div>
      </div>
      </div>
      
    </div>
  )
}
