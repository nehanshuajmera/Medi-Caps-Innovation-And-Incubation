import React from 'react'
import SingleTeamMember from './SingleTeam'
import "./team.css"
export default function TeamMember() {
  return (
    <div className='our-team-section-aboutus' style={{backgroundColor:"black"}}>
      <div style={{ backgroundColor: "black", color: "white", padding: "10px"}}>
        <h1 style={{ textAlign: "center", margin: "10px" }}>Our Team</h1>
        <div className="zl-staff-items " >
          <SingleTeamMember img={"https://media.licdn.com/dms/image/C5603AQE3rSup8NMJAA/profile-displayphoto-shrink_800_800/0/1577668183645?e=1691625600&v=beta&t=oRKs6MWnTHzGGpvWHkW0NhruKyPHPMNuxftGnjLoL90"} name={"Palash Garg"} desc={"Managing Director at MII Foundation"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
           , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/palash-garg-394195195/"} />
          <SingleTeamMember img={"https://media.licdn.com/dms/image/C5603AQHR2TFt3o4lGw/profile-displayphoto-shrink_800_800/0/1517272135477?e=1691625600&v=beta&t=fXISo6McjQ5EpUNLCXnZcn1j7kUBWseCBplXjdhpM0s"} name={"Prof. Dilip K. Patnaik "} desc={"Vice Chancellor"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/prof-dilip-k-patnaik-28339b105/"} />
          <SingleTeamMember img={"https://media.licdn.com/dms/image/D4E03AQFx8MAPSQNJeg/profile-displayphoto-shrink_800_800/0/1683177196896?e=1691020800&v=beta&t=7nZ7MS9nrEliJwoJN68PtTESvZ1bwu3-IH8sGvXOioA"} name={"Arnav Mishra "} desc={"CEO at MII Foundation"}
            content={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sapiente, rem fugiat, distinctio vitae, quod dolores cum obcaecati voluptatibus a porro nisi beatae saepe
            , a leading crypto VC and strategic advisory firm.`} contact={"https://www.linkedin.com/in/arnavm/"} />
          <hr />
        </div>
      </div>
    </div>
  )
}
