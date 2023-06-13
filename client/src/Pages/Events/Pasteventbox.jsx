import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Pasteventbox({props}) {

  const navigate = useNavigate();
  return (
    <div className='singlepastevent'>
        <h3>{props.title}</h3>
        <img src={props.images} alt="eventimage" />
        <p>{props.description.substring(1, 90)}...</p>
        <button class="button-who-am-i" onClick={()=>{navigate(`/singleevent/${props._id}`)}}> View Details 🎉</button> 
    </div>
  )
}

