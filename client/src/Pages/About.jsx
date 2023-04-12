import React from 'react'
import './About.css';
import TeamMember from './OurTeam/TeamMember';
import Abouthero from '../AboutUs/Abouthero';
export default function About() {
  return (
    <div className='about-container'>
      <div className='scroll-sections'>
      <Abouthero />
      </div>

      <div className="about-section-2 scroll-sections">
        <img src="./images/Black logo - no background.png" alt="" width={"35%"} />
        <div className="divide-and-conquer-2">
          <p className="about-section-2-paragraph">
            At MII Foundation, we have a culture that is collaborative, inclusive, and centered around innovation and creativity. We believe in fostering a supportive environment where start-ups can come together to share ideas, knowledge, and experiences.
          </p>
        </div>
      </div>
      
      <TeamMember />
    </div>
  )
}