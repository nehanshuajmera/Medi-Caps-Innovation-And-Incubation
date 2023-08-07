import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

export default function SingleAdvisor(props) {
    const [accodian, setaccodian] = useState(false);
  return (
   
    <div onClick={()=>{setaccodian(!accodian)}}
      className={accodian?"zl-staff-item -active":"zl-staff-item"}
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)",
        willChange: "auto"
      }}
    >
      <div className="zl-staff-head">
        <div className="zl-staff-info">
          <div className="zl-staff-item-avatar">
            <img
              src={props.img}
              alt=""
            />
          </div>
          <div className="zl-staff-item-name">
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className="zl-staff-item-icon">
          <span>
            <svg className="zl-svgsprite -plus">
              <use xlinkHref="/assets/img/sprites/svgsprites.svg#plus" />
            </svg>
          </span>
          <span>
            <svg className="zl-svgsprite -minus">
              <use xlinkHref="/assets/img/sprites/svgsprites.svg#minus" />
            </svg>
          </span>
        </div>
        <NavLink to={props.contact} target='_blank' style={{color:"#0072b1"}}><i class="fa-brands fa-linkedin fa-2x"></i></NavLink>
      </div>
      {/* <div className="zl-staff-item-text">
        <p>{props.content}</p>
        <NavLink to={props.contact} target='_blank' style={{color:"#0072b1"}}><i class="fa-brands fa-linkedin fa-2x"></i></NavLink>
      </div> */}
    </div>

    )
}
