import axios from 'axios';
import React, { useState } from 'react'
import EditBlog from './EditBlog';
import { useNavigate } from "react-router-dom";


export default function Singleblog(props) {
  const navigate=useNavigate();
  const [editblg, seteditblg] = useState(false);
  const deleteblg=async ()=>{
    await axios.get(`/blog/deleteblog/${props.id}`).then((res) => {  alert("Deleted Sucessfully"); window.location.reload()});
  }
  const updateblgfeatured=async ()=>{
    await axios.get(`/blog/changefeaturedstatus/${props.id}`).then((res) => {  alert("Featured Sucessfully"); window.location.reload() });
  }
  return (
    
      <tr>
    <td onClick={()=>{navigate(`/detailsblog/${props.id}`)}} style={{cursor:"pointer",textDecoration:"underline"}}>{props.title}</td>
    <td>{props.description.slice(0,200)}</td>
    <td><button  className='table-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updateblgfeatured()}}><i class="fa-solid fa-jet-fighter-up fa-2x"></i></button></td>
    <td> <button className='table-btn'onClick={()=>{deleteblg()}}><i className="fa fa-trash fa-2x" aria-hidden="true"/></button></td>
    <td> <button className='table-btn' onClick={()=>seteditblg(!editblg)}><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></button></td>
    <div className='edit-blg-centre'>
      {editblg?<EditBlog props={props} seteditblg={seteditblg}/>:null}
      </div>
  </tr>
  )
  
}
  // {/* <div className="blog-box">
  //   <div className="blog-img">
  //     <img src={props.images} alt="blog-img" />
  //   </div>
  //   <div className="blog-content">
  //     <div className="row1">
  //       <h3 className="title">{props.title}</h3>
  //       <p className="blogtxt">{props.description}</p>
  //     </div>
  //     <div className='row-2'>
  //       <span className="publisher">{props.authername}</span> 
  //       <span className="date">{props.date}</span>
  //     </div>
  //     <div className="btn-section row-3">          
  //     <button className='delete-btn'onClick={()=>{deleteblg()}}><i className="fa fa-trash fa-1x" aria-hidden="true"/></button>
  //       <button  className='delete-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updateblgfeatured()}}>Featured <i class="fa-solid fa-jet-fighter-up"></i></button>
  //     </div> 
  //   </div>
  // </div>
  // <EditBlog props={props}/> */}
