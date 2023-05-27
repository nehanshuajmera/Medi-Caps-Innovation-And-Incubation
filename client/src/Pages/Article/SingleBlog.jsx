import React from 'react'

export default function SingleBlog(props) {
  return (
   <div className="blog-box-1">
    <div className="blog-box-img-1">
      <img src={props.img} alt="" /></div>
    <div className="blog-box-date">{props.date}</div>
    <div className="blog-box-1-title">{props.title}</div>
    <div className="blog-box-description">{props.description}</div>
  </div>
  )
}
