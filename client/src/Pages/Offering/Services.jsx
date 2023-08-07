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
          {content==="sfi"?<><p style={{ fontWeight: '400', fontSize:'2.2em' }}>
            Seed-fund investment can be a crucial step in supporting early-stage startups and fostering innovations. MII Foundation helps you decide on the funding structure for your seed-fund investments. This could involve providing equity investments, convertible notes, or grants. Considering the appropriate level of investment based on the stages and needs of the startups </p><p style={{ fontWeight: '700', fontSize:'2.2em' }}> we aim to support</p></>:<></>}
          {content==="cw"?<p>
            
A co-working space for an Innovation and Incubation Foundation is a fantastic idea to foster creativity, collaboration, and entrepreneurship. Co-working spaces provide a shared working environment where individuals and startups from diverse backgrounds can come together, share resources, and exchange ideas. Here's how such a co-working space can benefit an Innovation and Incubation Foundation:

<br/>
<br/>
Collaboration and Networking: Co-working spaces bring together individuals with different skill sets, expertise, and backgrounds. This environment encourages collaboration and networking opportunities among members. Startups can connect with like-minded entrepreneurs, mentors, investors, and potential partners, which can lead to valuable collaborations and business opportunities.

<br/>
<br/>
Knowledge Sharing: Co-working spaces create an environment that facilitates knowledge sharing and learning. Members can benefit from each other's experiences, insights, and expertise. This exchange of knowledge can spark innovation, help overcome challenges, and inspire new ideas.

<br/>
<br/>
Resource Sharing: Startups often face resource constraints, especially in the early stages. Co-working spaces provide shared resources such as office infrastructure, equipment, meeting rooms, and administrative services. This shared economy model helps reduce costs and provides access to resources that might otherwise be unaffordable for individual startups.

<br/>
<br/>
Incubation Support: An Innovation and Incubation Foundation can leverage the co-working space to offer additional support and services to startups. This can include mentorship programs, workshops, training sessions, access to experts, and business development support. By integrating incubation services into the co-working space, startups can receive specialized assistance tailored to their needs.
          </p>:<></>}
          {content==="hr"?<p>
          HR Access for Innovation and Incubation Foundation is a term that seems to be specific to your organization or a particular context. However, based on the information provided, it appears to be related to accessing human resources (HR) services or support for an innovation and incubation foundation.

An innovation and incubation foundation typically focuses on fostering innovation and supporting the growth of startups and entrepreneurial ventures. These foundations often provide resources, mentorship, networking opportunities, and infrastructure to help startups succeed. HR services within such a foundation would likely involve managing the human resources aspect of the organization, including recruitment, talent management, employee benefits, and other HR-related functions.

If you are looking for specific information about HR Access for Innovation and Incubation Foundation, it would be best to reach out to the foundation directly or provide more specific details about your query so that I can assist you more effectively.
          </p>:<></>}
          {content==="nw"?<p>
          The Networking for Innovation and Incubation Foundation (NIIF) is an organization dedicated to fostering innovation, entrepreneurship, and incubation activities. Its primary objective is to create a supportive ecosystem that enables startups, entrepreneurs, and innovators to thrive and succeed.

          <br/>
<br/>
Here are some key aspects and activities typically associated with networking for innovation and incubation foundations:

<br/>
<br/>
Networking: NIIF facilitates networking and collaboration among various stakeholders in the innovation and incubation ecosystem. This includes connecting startups with investors, mentors, industry experts, and other entrepreneurs. By building a strong network, NIIF helps create opportunities for knowledge sharing, partnerships, and business development.

<br/>
<br/>
Incubation Programs: NIIF often runs incubation programs designed to support early-stage startups. These programs provide entrepreneurs with resources, infrastructure, mentorship, and guidance to refine their business ideas, develop their products or services, and establish a sustainable business model. Incubation programs may also offer access to funding opportunities and legal, marketing, and technical support.

<br/>
<br/>
Funding and Investment: One crucial role of NIIF is to facilitate access to funding for startups and innovative projects. This can involve connecting startups with potential investors, organizing pitch events or demo days, or even establishing an investment fund specifically for supporting innovative ventures. By bridging the gap between startups and funding sources, NIIF plays a crucial role in nurturing entrepreneurship and innovation.

<br/>
<br/>
Capacity Building: NIIF often focuses on building the skills and capabilities of entrepreneurs and startups. It may offer training programs, workshops, and seminars on various aspects of entrepreneurship, such as business planning, marketing, finance, and leadership. By enhancing the entrepreneurial skills of individuals, NIIF contributes to the growth and success of startups in the ecosystem.
          </p>:<></>}
        </div>
    </div>
  )
}
