import React, { useState } from 'react'

export default function Services() {
    const [content, setcontent] = useState("sfi");
  return (
    <div className="offering-container-4">
        <div className="c-4-left">
          <div className="c-4-l-name" onClick={()=>{setcontent("sfi")}}><h2>Seed-Fund Investment</h2></div>
          <div className="c-4-l-name" onClick={()=>{setcontent("cw")}}><h2>Co-Working</h2></div>
          <div className="c-4-l-name" onClick={()=>{setcontent("hr")}}><h2>HR Access</h2></div>
          <div className="c-4-l-name" onClick={()=>{setcontent("nw")}}><h2>Networking</h2></div>
        </div>
        <div className="c-4-right">
          {content==="sfi"?<><p style={{ fontWeight: '400' }}>
            Seed-fund investment can be a crucial step in supporting early-stage startups and fostering innovations. MII Foundation helps you decide on the funding structure for your seed-fund investments. This could involve providing equity investments, convertible notes, or grants. Considering the appropriate level of investment based on the stages and needs of the startups </p><p style={{ fontWeight: '700' }}> we aim to support</p></>:<></>}
          {content==="cw"?<p style={{ fontWeight: '400' }}>            
MII Foundation provides a shared co-working environment where individuals and startups from diverse backgrounds can come together, share resources, and exchange ideas. 
          </p>:<></>}
          {content==="hr"?<p style={{ fontWeight: '400' }}>
MII Foundation typically focuses on fostering innovation and supporting the growth of startups and entrepreneurial ventures. This foundation provides resources, mentorship, networking opportunities, and infrastructure to help startups succeed. HR services within the foundation would likely involve managing the human resources aspect of the organization, including recruitment, talent management, interns, and other HR-related functions.
          </p>:<></>}
          {content==="nw"?<p style={{ fontWeight: '400' }}>
        MII Foundation facilitates networking and collaboration among various stakeholders in the innovation and incubation ecosystem. This includes connecting startups with investors, mentors, industry experts, and other entrepreneurs. By building a strong network, MII Foundation helps create opportunities for knowledge sharing, partnerships, and business development.
          </p>:<></>}
        </div>
    </div>
  )
}
