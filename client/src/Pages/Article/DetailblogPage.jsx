import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import "./detailblog.css"
import axios from 'axios';
export default function DetailblogPage() {
    const { id } = useParams();
    const [blogs, setblogs] = useState(
        {images:"",
        description: "",
        title:"",
        authername:"",
        date:"",
        like:0});
      const apicall=async ()=>{
          await axios.get(`/blog/singleblog/${id}`).then((res) => { setblogs(res.data) }).catch((err)=>{console.log(err)});
        }
      
        useEffect(() => {
          apicall();
        }, [])
    
  return (
    <div style={{marginTop:"10vh"}}>
        <article className="ad5-padding-y-lg">
  <header className="ad5-container ad5-max-width-xs ad5-margin-bottom-lg">
    <div className="ad5-text-component ad5-text-center ad5-line-height-lg ad5-text-gap-md ad5-margin-bottom-md">
      <h1>{blogs.title}</h1>
      {/* <p className="ad5-color-contrast-medium ad5-text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
        rerum amet.
      </p> */}
    </div>
    <div className="ad5-flex ad5-justify-center">
      <div className="author author--meta">
        <a href="#0" className="author__img-wrapper">
          <img
            src='https://firebasestorage.googleapis.com/v0/b/mii-foundation.appspot.com/o/authorimg.jpg?alt=media&token=454f2c55-93fe-41d0-95d7-2aeec9f7cced'
            alt="Author picture"
          />
        </a>
        <div className="author__content ad5-text-component ad5-text-gap-2xs">
          <h4 className="ad5-text-base">
            <a href="#0" rel="author">
             {blogs.authername}
            </a>
          </h4>
          <p className="ad5-text-sm ad5-color-contrast-medium">
            <time>{blogs.date}</time> - 5 min read
          </p>
        </div>
      </div>
    </div>
  </header>
  <figure className="ad5-container ad5-max-width-lg ad5-margin-bottom-lg">
    <img
      className="ad5-block ad5-width-100% ad5-radius-lg"
      src={blogs.images}
      alt="Image description"
    />
  </figure>
  <div className="ad5-container ad5-max-width-adaptive-sm">
    <div className="ad5-text-component ad5-line-height-lg ad5-text-gap-md">
      <p>{blogs.description}</p>
    </div>
  </div>
</article>

    </div>
  )
}
