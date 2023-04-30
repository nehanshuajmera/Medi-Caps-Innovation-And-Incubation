import React from 'react'
import './About.css';
import TeamMember from './OurTeam/TeamMember';
import Advisors from './OurAdvisors/Advisors';
import Testimonials from "./Home/Testimonials";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About() {
  return (
    <div className='about-container'>

      <div data-aos="fade-right" className="about-section-2 scroll-sections">
        <img src="./images/Black logo - no background.png" alt="" width={"35%"} />
        <div className="divide-and-conquer-2">
          <h3 className="about-section-2-heading">
            "Create a perfect ecosystem for your business"
          </h3>
          <p className="about-section-2-paragraph">
            At MII Foundation, we have a culture that is collaborative, inclusive, and centered around innovation and creativity. We believe in fostering a supportive environment where start-ups can come together to share ideas, knowledge, and experiences.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="about-team-section-3-container scroll-sections">
        <TeamMember />
      </div>
      <div data-aos="fade-right" className="about-advisor-section-4-container scroll-sections">
        <Advisors />
      </div>
      <div data-aos="fade-left" className="about-testimonials-section-5-container scroll-sections">
        <Testimonials />
      </div>
    </div>
  )
}