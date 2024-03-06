import React, { useEffect, useState } from 'react'
import './testimonials.css'
import axios from 'axios'
export default function Testimonials() {
  const [testimonails, settestimonails] = useState([]);
  useEffect(() => {
    axios.get("/testimonial")
    .then((res)=>{settestimonails(res.data)})
  }, [])
  const [curr, setcurr] = useState(0);
  return (
    <div className='testimonial-box'>
      <div className='testimonial-inner-box'>
        <h1>Testimonials</h1>
        <div className='testimonial-text-content'>
        <p>{testimonails[curr]?.content}</p>
      </div>
      <div className='testimonial-bottom-section'>
      <div className="testimonal-name-avtar">
           <div className='testimonial-avtar-container'>
          <img src={testimonails[curr]?.profileurl} alt='' />         
          </div>
          <div className='testimonial-name-container'>
            <h3>{testimonails[curr]?.name}</h3>
            <h3 style={{color:"#931727"}}>{testimonails[curr]?.designation}</h3>
          </div>
        </div>
         
        <div className='testimonial-next-prev-option'>
        {/* {curr-1>=0? */}
            <div className='nxt-prv-btn'  onClick={()=>{setcurr((curr-1+testimonails.length)%testimonails.length)}}> 
          <i className="fa-solid fa-arrow-left "></i>
          </div>
          {/* :null} */}
          {/* {curr+1<testimonails.length? */}
          <div className='nxt-prv-btn' onClick={()=>{setcurr((curr+1)%testimonails.length)}}> 
          <i className="fa-solid fa-arrow-right "></i>
          </div>
          {/* :null} */}
          </div>
      </div>
      </div>
      
    </div>
  )
}
