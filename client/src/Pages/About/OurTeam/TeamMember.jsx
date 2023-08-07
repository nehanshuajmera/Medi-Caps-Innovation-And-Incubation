import React from 'react'
import SingleTeamMember from './SingleTeam'
import "./team.css"
export default function TeamMember() {
  return (
    <div className='our-team-section-aboutus' style={{backgroundColor:"black"}}>
      <div style={{ backgroundColor: "black", color: "white", padding: "10px"}}>
        <h1 style={{ textAlign: "center", margin: "10px" }}>Our Team</h1>
        <div className="zl-staff-items " >
          <SingleTeamMember img={"./images/adviser/palashsir.jpeg"} name={"Palash Garg"} desc={"Managing Director at MII Foundation"}
            content={``} contact={"https://www.linkedin.com/in/palash-garg-394195195/"} />
          <SingleTeamMember img={"./images/adviser/vcsir.jpeg"} name={"Prof. Dilip K. Patnaik "} desc={"Vice Chancellor"}
            content={``} contact={"https://www.linkedin.com/in/prof-dilip-k-patnaik-28339b105/"} />
          <SingleTeamMember img={"./images/adviser/arnavsir.jpg"} name={"Arnav Mishra "} desc={"CEO at MII Foundation"}
            content={``} contact={"https://www.linkedin.com/in/arnavm/"} />
          <hr />
        </div>
      </div>
    </div>
  )
}
