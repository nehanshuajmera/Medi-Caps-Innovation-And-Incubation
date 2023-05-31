import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Mainblog(props) {
  const navigate = useNavigate();
  return (
    <div className='main-blog-section'>
        <div onClick={()=>{navigate(`/detailsblog/${props.id}`)}} style={{cursor:"pointer"}} className="blog-section-1-box">
          <div className="blog-section-1-left-box">
            <img src={props.img} alt="blog-image" />
          </div>
          <div className="blog-section-1-right-box">
            <div class="blog-feed-grid-col -right">
              <div class="blog-feed-date">{props.date}</div>
              <div class="blog-feed-title">{props.title}</div>
              <div class="blog-feed-description">{props.description}</div>
            </div>
          </div>
        </div>
    </div>
  )
}
