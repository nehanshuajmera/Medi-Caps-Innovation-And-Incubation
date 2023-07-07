import React from 'react'
import SingleAdvisor from './SingleAdvisor'
import "./Advisor.css"
export default function Advisors() {
  return (
    <div className='our-team-section-aboutus '>
      <div style={{ backgroundColor: "white", color: "black", padding: "20px", paddingBottom: '50px' }}>
        <h1 style={{ textAlign: "center", margin: "10px", marginBottom: '30px' }}>Our Advisors</h1>
        <div className="zl-staff-items " >
          <SingleAdvisor img={"./images/adviser/Mr.GKSharma.jpg"} name={"Mr. G K Sharma"} desc={"Position Description"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
           , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/prof-g-k-sharma-888a2a1a6"} />
          <SingleAdvisor img={"./images/adviser/rambansal.jpg"} name={"Ram Bansal"} desc={"Position Description"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/ram-bansal-91118423"} />
          <SingleAdvisor img={"./images/adviser/suhanapuri.jpg"} name={"Dr Suhana Puri Goswami"} desc={"Position Description"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"hhttp://www.linkedin.com/in/suhana-puri-2b6163130"} />
            <SingleAdvisor img={"./images/adviser/upasnamishra.jpg"} name={"Upsana Mishra"} desc={"Position Description"}
          content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
          , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/upasna-mishra-aab9371aa"} />
          <hr />
        </div>
      </div>
    </div>
  )
}
