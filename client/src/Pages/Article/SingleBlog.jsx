import React from 'react'
import { useNavigate } from "react-router-dom";
export default function SingleBlog(props) {
  const navigate = useNavigate();

  return (
   <div onClick={()=>{navigate(`/detailsblog/${props.id}`)}} style={{cursor:"pointer"}} className="blog-box-1">
    <div className="blog-box-img-1">
      <img src={props.img} alt="" /></div>
    <div className="blog-box-date">{props.date}</div>
    <div className="blog-box-1-title">{props.title}</div>
    <div className="blog-box-description">{props.description}</div>
  </div>
  )
}
