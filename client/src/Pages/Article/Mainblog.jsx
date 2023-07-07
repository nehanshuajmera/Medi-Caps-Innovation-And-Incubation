import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Mainblog(props) {
  const navigate = useNavigate();
  return (
    <div className='blog-section-1-box '>
        <div onClick={()=>{navigate(`/detailsblog/${props.id}`)}} style={{cursor:"pointer"}} className="blog-section-1-box">
          <div className="blog-section-1-left-box">
            <img src={props.img} alt="blog-image" />
          </div>
          <div className="blog-section-1-right-box">
            <div className="blog-feed-grid-col -right">
              <div className="blog-feed-date">{props.date}</div>
              <div className="blog-feed-title">{props.title}</div>
              <div className="blog-feed-description">{props.description.slice(1,290)}...</div>
            </div>
          </div>
        </div>
    </div>
  )
}
