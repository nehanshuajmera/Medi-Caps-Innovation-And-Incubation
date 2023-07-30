import React from "react";
import "./Glimpses.css";
import { useNavigate } from "react-router-dom";

const SinglehomeBlog=(props)=>{
  const navigate=useNavigate();

  return(
    <div className="blog-1" style={{cursor:"pointer"}} onClick={()=>{navigate(`/detailsblog/${props._id}`)}} >
    <div className="blog-photo">
      <img
        src={props.img}
        alt="blog" width={"335"} height={"200"}
      />
    </div>
    <div className="blog-text">
      <h2>{props.title}</h2>
      <p>
      {props.description.slice(1,290)}...
      </p>
    </div>
  </div>
  )
}
const Glimpses = (props) => {
  const navigate=useNavigate();
// console.log(props)
  return (
    <div>
      <div className="glimpses-container">
        <div className="glimpses-header">
          <h1
            className="glimpses-h1"
          >
            Recent blog <br />
            posts
          </h1>
          <button className=" button glimpses-btn-seeall" onClick={()=>{navigate("/Article")}}>
            See all articles
          </button>
        </div>

        <div className="blog-container-glimpses">
        {props.blog.slice(0,3).map(item=>{
           return  <SinglehomeBlog id={item._id} img={item.images} date={item.date} title={item.title} description={item.description}/>
         })}
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
