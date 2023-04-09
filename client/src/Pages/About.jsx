import React from 'react'
import './About.css';
import TeamMember from './OurTeam/TeamMember';
import Abouthero from '../AboutUs/Abouthero';
export default function About() {
  return (
    <div className='about-container'>
      <Abouthero/>
 
      <div className="about-section-2">
        <img src="./images/Black logo - no background.png" alt="" width={"35%"} />
        <div className="divide-and-conquer-2">
        <p className="about-section-2-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error numquam quasi repellendus in delectus quibusdam nulla, assumenda ipsum quisquam quo, quae odio quis! Sed perferendis eligendi dolore quos, ea est quia ducimus culpa?
        </p>
        </div>
      </div>
      <TeamMember/>
    </div>
  )
}