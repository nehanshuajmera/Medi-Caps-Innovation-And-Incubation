import axios from 'axios';
import React from 'react'

export default function SingleTestimonials(props) {
     const delettestimonial=async ()=>{
      // console.log(props.id)
        await axios.get(`/testimonial/deletetestimonial/${props.id}`).then((res) => { alert("Deleted Sucessfully"); window.location.reload()});
      }
  return (
    <tr className='single-query-box'>
        <td>{props.name}</td> 
        <td>{props.content}</td>
        <td> <button className='table-btn'onClick={()=>{delettestimonial()}}><i className="fa fa-trash fa-2x" aria-hidden="true"/></button></td>
    </tr>
  )
}