import React, { useState } from 'react'

export default function Services() {
    const [content, setcontent] = useState("mentoring");
  return (
    <div className="offering-container-4">
        <div className="c-4-left">
          <div className="c-4-l-name" onClick={()=>{setcontent("mentoring")}}>Mentoring</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("sfi")}}>Seed-Fund Investment</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("ate")}}>Access to Events</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("cw")}}>Co-Working</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("hr")}}>HR Access</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("in")}}>Interns</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("rs")}}>Research Support</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("bpd")}}>Business Plan Development</div>
          <div className="c-4-l-name" onClick={()=>{setcontent("c")}}>Consulting</div>
        </div>
        <div className="c-4-right">
          {content=="mentoring"?<h1>Mentoring</h1>:<></>}
          {content=="sfi"?<h1>Seed-Fund Investment</h1>:<></>}
          {content=="ate"?<h1>Access to Events</h1>:<></>}
          {content=="cw"?<h1>Co-Working</h1>:<></>}
          {content=="hr"?<h1>HR Access</h1>:<></>}
          {content=="in"?<h1>Interns</h1>:<></>}
          {content=="rs"?<h1>Research Support</h1>:<></>}
          {content=="bpd"?<h1>Business Plan Development</h1>:<></>}
          {content=="c"?<h1>Consulting</h1>:<></>}
        </div>
    </div>
  )
}
