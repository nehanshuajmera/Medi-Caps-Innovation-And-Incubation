import React from 'react'
import './About.css';
import TeamMember from './OurTeam/TeamMember';
import Advisors from './OurAdvisors/Advisors';
import Testimonials from "./Testimonials/Testimonials";

export default function About() {
  return (
    <div className='about-container'>
      <div className="about-hero">
        <div className="divide-and-conquer-2">
          <h3 className="about-section-2-heading">
            "Create a perfect ecosystem for your business"
          </h3>
          <p className="about-section-2-paragraph">
          MII Foundation is a full-scale incubator that prepares decentralized innovation for global use. To prepare the project for wide adoption, we assure full compliance, set up collaborations with global financial institutions, investment funds, governments. MII is a space where highly practical ideas that could potentially impact millions
              (or better, billions) receive the support they deserve.
            {/* At MII Foundation, we have a culture that is collaborative, inclusive, and centered around innovation and creativity. We believe in fostering a supportive environment where start-ups can come together to share ideas, knowledge, and experiences. */}
          </p>
        </div>
      </div>
      <div className="about-team-section-3-container">
        <TeamMember />
      </div>
      <div className="about-advisor-section-4-container">
        <Advisors />
      </div>
      {/* <hr style={{margin:"0% 10%"}}/> */}
      <div className="about-testimonials-section-5-container">
        <Testimonials />
      </div>
    </div>
  )
}