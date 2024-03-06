import React, { useState } from 'react'
import axios from 'axios';
import EditEvents from './EditEvents';
import { useNavigate } from "react-router-dom";

const Singleevent = (props) => {
  const navigate=useNavigate();
  const [editblg, seteditblg] = useState(false);
    const deleteevent=async ()=>{
        await axios.get(`/event/deleteevent/${props.id}`).then((res) => { alert("Deleted Sucessfully"); window.location.reload()});
      }
      const updateblgfeatured=async ()=>{
        await axios.get(`/event/changefeaturedstatus/${props.id}`).then((res) => {  alert("Featured Sucessfully"); window.location.reload() });
      }
  return (
    <tr>
    <td onClick={()=>{navigate(`/singleevent/${props.id}`)}} style={{cursor:"pointer",textDecoration:"underline"}}>{props.title}</td>
    <td>{props.description.slice(0,200)}</td>
    <td>{props.date} {props.time}</td>
    <td>{props.location}</td>
    <td>{props.registrationfee}₹</td>
    <td><button  className='table-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updateblgfeatured()}}><i fa-2x class="fa-solid fa-hourglass-start fa-2x"></i></button></td>
    <td> <button className='table-btn'onClick={()=>{deleteevent()}}><i className="fa fa-trash fa-2x" aria-hidden="true"/></button></td>
    <td> <button className='table-btn' onClick={()=>seteditblg(!editblg)}><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></button></td>
     <div className='edit-blg-centre'>
      {editblg?<EditEvents props={props} seteditblg={seteditblg}/>:null}
      </div>
  </tr>
  )
}

export default Singleevent

// {/* <div>
//   <div className="event-box">
//       <div className="event-img">
//         <img src={props.images} alt="event-img" />
//       </div>
//       <div className="event-discription">
//         <h3 className="title">{props.title}</h3>
//         <p className="event-txt">{props.descriptionn}</p>
//         <div className="event-row">
//           <div className='date-time'><span>{props.date}</span><span> {props.time}</span></div>
//           <p>{props.location}</p>
//         </div>
//         <div className="event-row">
//           <span>Number of speaker: {props.numberofspeaker}</span>
//           <span>{props.registrationfee}₹</span>
//         </div>
//         <i className="fa fa-trash event-delete-btn" aria-hidden="true"onClick={()=>{deleteevent()}}/>
//         <button  className='delete-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updateblgfeatured()}}>Featured <i class="fa-solid fa-jet-fighter-up"></i></button>
//       </div>
//       <EditEvents props={props}/>
//     </div>
// </div> */}