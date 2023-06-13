import React, { useState } from 'react'

export default function Services() {
    const [content, setcontent] = useState("sfi");
  return (
    <div className="offering-container-4">
        <div className="c-4-left">
          <div className="c-4-l-name" onClick={()=>{setcontent("sfi")}}><h4>Seed-Fund Investment</h4></div>
          <div className="c-4-l-name" onClick={()=>{setcontent("cw")}}><h4>Co-Working</h4></div>
          <div className="c-4-l-name" onClick={()=>{setcontent("hr")}}><h4>HR Access</h4></div>
          <div className="c-4-l-name" onClick={()=>{setcontent("nw")}}><h4>Networking</h4></div>
        </div>
        <div className="c-4-right">
          {content==="sfi"?<h1>Seed-Fund Investment Content</h1>:<></>}
          {content==="cw"?<h1>Co-Working Content</h1>:<></>}
          {content==="hr"?<h1>HR Access Content</h1>:<></>}
          {content==="nw"?<h1>Networking Content</h1>:<></>}
        </div>
    </div>
  )
}
