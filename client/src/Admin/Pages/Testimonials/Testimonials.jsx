import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AddTestimonials from './AddTestimonials';
import SingleTestimonials from './SingleTestimonials';

const Testimonials = () => {
  const[openform,setopenform]=useState(false);
  const [sign,setSign] =useState('plus');
const signChange = (openform) => {
  openform? setSign('plus') : setSign('xmark');
}
  const [Testimonials, setTestimonials] = useState([]);
  const apicall=async ()=>{
    await axios.get("/testimonial").then((res) => { setTestimonials(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])

  return (
    <div>
      <div className="event-component">
        {/* <p>Testimonials</p> */}
        <div className="add-icon" id="add-icon-Testimonials" onClick={()=>{setopenform(!openform);signChange(openform)}}>
            <i class={`fa-solid fa-${sign}`}/>
        </div>
        {openform?<AddTestimonials />:<></>}
        
      </div>

      <div className="blogs">
        <table>
  <tr>
    <th>Name</th>
    <th>Content</th>
    <th>Delete</th>
  </tr>
        {Testimonials.map((item) => {
         return <SingleTestimonials id={item._id} content={item.content} name={item.name} profileurl={item.profileurl}/>
        })}
     </table>
      </div>
    </div>
  )
}

export default Testimonials;