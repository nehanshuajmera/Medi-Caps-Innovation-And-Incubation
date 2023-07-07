import React from "react";
import "./Article.css";
import Mainblog from "./Mainblog";
import { useNavigate } from "react-router-dom";

export default function Article({blog}) {
// console.log(blog)
const navigate = useNavigate();

  return (
    <div>
      <div className="blog-section">
        {blog.filter(item => item.featured==="True").map(item=>{
          return <Mainblog id={item._id} img={item.images} date={item.date} title={item.title} description={item.description}/>
        })}
        
       <div className="blog-section-2-box scroll-sections">
       {blog.filter(item => item.featured!=="True").map(item=>{
          return (<div onClick={()=>{navigate(`/detailsblog/${item._id}`)}} className="blog-box-1">
            <div className="blog-box-img-1">
              <img src={item.images} alt="" /></div>
            <div className="blog-box-date">{item.date}</div>
            <div className="blog-box-1-title">{item.title}</div>
            <div className="blog-box-description">{item.description.slice(1,290)}...</div>
          </div>)
       })}
        </div>
      </div>
    </div>
  );
}


