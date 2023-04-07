import React from 'react'
import SingleTeamMember from './SingleTeam'
import "./team.css"
export default function TeamMember() {
  return (
    <div style={{marginBottom:"50px"}}>
        <h1 style={{textAlign:"center",margin:"50px"}}>Our Team</h1>
         <div className="zl-staff-items">
            <SingleTeamMember img={"https://media.licdn.com/dms/image/C5603AQE3rSup8NMJAA/profile-displayphoto-shrink_200_200/0/1577668183645?e=1686182400&v=beta&t=1TwXAy2RH4f_kNMBdyX-gDz8IJ4IRYMZvdIgNOSR9Cc"} name={"Palash Garg"} desc={"OSD to Chancellor at Medi-Caps University"} 
            content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, perferendis eius. Eaque, ipsa voluptate, incidunt numquam, consequatur optio possimus pariatur fugit dignissimos corrupti error maiores a porro ad voluptates minus." }  />
            <SingleTeamMember img={"https://media.licdn.com/dms/image/C5603AQHR2TFt3o4lGw/profile-displayphoto-shrink_800_800/0/1517272135477?e=1686182400&v=beta&t=gecMvwsEc6LmkhZ2baoPyRU0D7NQaI2b-YP75RYkScc"} name={"Prof. Dilip K. Patnaik "} desc={"Vice Chancellor at Medi-Caps University"} 
            content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, perferendis eius. Eaque, ipsa voluptate, incidunt numquam, consequatur optio possimus pariatur fugit dignissimos corrupti error maiores a porro ad voluptates minus." }  />
        </div>

    </div>
  )
}
