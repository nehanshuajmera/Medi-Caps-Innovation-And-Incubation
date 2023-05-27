import React from "react";
import { useEffect, useState } from 'react'
import "./Article.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import Mainblog from "./Mainblog";
import SingleBlog from "./SingleBlog";
AOS.init();

export default function Article() {

    const [openform,setopenform]=useState(false);
    // const [sign,setSign] =useState('plus');
    
    
    const [blogs, setblogs] = useState();
    const apicall=async ()=>{
        await axios.get("blog/allblogs").then((res) => { console.log("Data",res) });
      }
    
      useEffect(() => {
        apicall();
      }, [])


  return (
    <div>
      <div className="blog-section">
        <Mainblog/>
  

        <div className="blog-section-2-box">
          <SingleBlog/>
           <SingleBlog/>
           <SingleBlog/>
           <SingleBlog/>
           <SingleBlog/>
        </div>
        
        {/* <div className="blog-button">
          <div className="blog-section-3-readmore scrol-sections">
            Read more
          </div>
        </div> */}
        {/* {blogs.map((item) => {
         return <blog id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date}/>
        })} */}
      </div>
    </div>
  );
}

