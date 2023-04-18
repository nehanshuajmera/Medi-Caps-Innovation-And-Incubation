import React from 'react'
import SingleAdvisor from './SingleAdvisor'
import "./Advisor.css"
export default function Advisors() {
  return (
    <div className='our-team-section-aboutus '>
      <div style={{ backgroundColor: "white", color: "black", padding: "10px"}}>
        <h1 style={{ textAlign: "center", margin: "10px" }}>Our Advisors</h1>
        <div className="zl-staff-items " >
          <SingleAdvisor img={"https://media.licdn.com/dms/image/C5603AQE3rSup8NMJAA/profile-displayphoto-shrink_200_200/0/1577668183645?e=1686182400&v=beta&t=1TwXAy2RH4f_kNMBdyX-gDz8IJ4IRYMZvdIgNOSR9Cc"} name={"Palash Garg"} desc={"Managing Director at MII Foundation"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
           , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/palash-garg-394195195/"} />
          <SingleAdvisor img={"https://media.licdn.com/dms/image/C5603AQHR2TFt3o4lGw/profile-displayphoto-shrink_800_800/0/1517272135477?e=1686182400&v=beta&t=gecMvwsEc6LmkhZ2baoPyRU0D7NQaI2b-YP75RYkScc"} name={"Prof. Dilip K. Patnaik "} desc={"Vice Chancellor"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/prof-dilip-k-patnaik-28339b105/"} />
          <SingleAdvisor img={"https://media.licdn.com/dms/image/C4D03AQFulEBrLcANjg/profile-displayphoto-shrink_200_200/0/1661943850018?e=1686182400&v=beta&t=SqWTeBRMNTDLG8igqrjNfW7bfobs9Atip8hn_MV9110"} name={"Arnav Mishra "} desc={"CEO at MII Foundation"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/arnavm/"} />
          <hr />
        </div>
      </div>
    </div>
  )
}
