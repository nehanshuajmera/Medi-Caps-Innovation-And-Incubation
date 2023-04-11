import React, { useState } from 'react'

export default function SingleTeam(props) {
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
            <p>Medi-Caps University</p>
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
      </div>
      <div className="zl-staff-item-text">
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
        (
          <a href="https://www.medicaps.ac.in/" target="_blank" rel="noopener">
           www.medicaps.ac.in
          </a>
          ), a leading crypto VC and strategic advisory firm.
        </p>
        {/* <p>
          Martin has over 15 years of experience working with and leading complex
          software architecture and development projects; including system-level,
          data-driven, UI/UX applications; and cryptographic projects in the
          rapidly evolving blockchain market. Martin currently lives in Lulea,
          Sweden.
        </p> */}
        {/* <p>
          He is a full-stack software developer who previously worked for
          Netrounds (acquired by Juniper Networks in 2020), where his role was to
          manage the R&amp;D team responsible for a cloud-hosted (AWS)
          microservice application that monitored Tier 1 Telecom Operator networks
          and services.
        </p> */}
        {/* <p>
          Martin has been an active OG (original guy) in the blockchain
          development community since 2013 and has advised multiple projects as a
          strategic technology advisor. As a team member of BlockUnify, Inc., one
          of crypto’s preeminent marketing and community management firms, he
          provides deep technical insights into the technology and architectures
          of some of the most innovative and ground-breaking crypto projects and
          cross-chain innovations.
        </p> */}
        {/* <p>
          Martin is particularly keen on identifying emerging trends and
          technologies in the blockchain universe and is a deeply committed
          proponent of making such innovations readily available to the global
          community.
        </p> */}
        <a href="mailto:sharma39vishal@gmail.com">Contact</a>
      </div>
    </div>

    )
}
