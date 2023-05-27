import React from "react";
import { useEffect, useState } from 'react'
import "./Article.css";
import axios from "axios";
import Mainblog from "./Mainblog";
import SingleBlog from "./SingleBlog";

export default function Article() {
    
    const [blogs, setblogs] = useState([
      {images:"https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-s…",
      description: "In publishing and graphic design, Lorem ipsum is a placeholder text co…",
      title:"Blog Title",
      authername:"Vishal Sharma",
      date:"27 May, 2023",
      like:0}]);
    const apicall=async ()=>{
        await axios.get("blog/allblogs").then((res) => { setblogs(res.data) }).catch((err)=>{console.log(err)});
      }
    
      useEffect(() => {
        apicall();
      }, [])


  return (
    <div>
      <div className="blog-section">
        <Mainblog img={blogs[0].images} description={blogs[0].description} title={blogs[0].title} date={blogs[0].date}/>
        <div className="blog-section-2-box">
           {blogs.slice(1,blogs.length).map((item) => {
                return <SingleBlog img={item.images} description={item.description} title={item.title} date={item.date} />
           })}
        </div>
        
      
      </div>
    </div>
  );
}

