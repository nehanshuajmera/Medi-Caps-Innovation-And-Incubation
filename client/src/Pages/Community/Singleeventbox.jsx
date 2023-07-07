import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Singleeventbox(props) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>{navigate(`/singleevent/${props.id}`)}} style={{cursor:"pointer"}}  className="event-box-container" >
            <h3 className='event-box-header'>
                {props.title}
            </h3>
            <p className="event-box-para">
                <i className="fa-sharp fa-solid fa-location-dot" style={{ padding: "0px 10px 0px 0px" }}></i> {props.location} 
                <br />
            </p>
            <p className="event-box-para">
            <i className="fa-solid fa-clock" style={{ padding: "0px 10px 0px 0px" }}></i> {props.date} 
            </p>
            <br/>
            <br/>
            <p>{props.description.substring(1, 190)}...</p>
        </div>
    )
}
