import React from 'react'
import SingleAdvisor from './SingleAdvisor'
import "./Advisor.css"
export default function Advisors() {
  return (
    <div className='our-team-section-aboutus '>
      <div style={{ backgroundColor: "white", color: "black", padding: "20px", paddingBottom: '50px' }}>
        <h1 style={{ textAlign: "center", margin: "10px", marginBottom: '30px' }}>Our Advisors</h1>
        <div className="zl-staff-items " >
          <SingleAdvisor img={"https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"} name={"Advisor Name"} desc={"Position Description"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
           , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/palash-garg-394195195/"} />
          <SingleAdvisor img={"https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"} name={"Advisor Name"} desc={"Position Description"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/prof-dilip-k-patnaik-28339b105/"} />
          <SingleAdvisor img={"https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"} name={"Advisor Name"} desc={"Position Description"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/arnavm/"} />
          <hr />
        </div>
      </div>
    </div>
  )
}
