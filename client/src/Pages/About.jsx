import React from 'react'
import './About.css';
import TeamMember from './OurTeam/TeamMember';
import Abouthero from '../AboutUs/Abouthero';
export default function About() {
  return (
    <div className='about-container'>
      <Abouthero/>
 
      <div className="about-section-2">
        <img src="https://media.licdn.com/dms/image/C560BAQFVLpC7QtyrAg/company-logo_400_400/0/1676459347608?e=2147483647&v=beta&t=8NlPHtSImrzq0W1AEugSxgD3YlwLjuB6FGVexwzSk-o" alt="" width={"70%"} />
        <div className="divide-and-conquer-2">
        <p className="about-section-2-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut error numquam quasi repellendus in delectus quibusdam nulla, assumenda ipsum quisquam quo, quae odio quis! Sed perferendis eligendi dolore quos, ea est quia ducimus culpa?
        </p>
        </div>
      </div>
      {/* <div className="about-section-3">
        <h2 className="ourteam">Our Team</h2>
        <SingleTeamMember/>
      </div> */}
      <TeamMember/>
    </div>
  )
}