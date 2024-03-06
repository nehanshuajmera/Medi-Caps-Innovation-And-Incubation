import React /*, { useState } */ from "react";
import Ourpartner from "./Carosol/Ourpartner";
import "./Home.css";
import ScrollAnimation from "./Scroll Animation/ScrollAnimation";
import MainContainer from "./MainContainer";
import Glimpses from "./Glimpses/Glimpses";


const Herosection = (props) => {
  return (
    <>
      <div className="home-section-container scroll-sections">
        <MainContainer/>
        <div className="section2-home-page home-section2-container scroll-sections">
          <div className="home-section2-heading">
            <h2>MII Foundation, a Section-8 company based in India, is an incubator dedicated to support and nurture innovative start-ups at Medi-Caps University in Indore.</h2>
          </div>
          <div className="home-section2-content">
            <p>At MII Foundation, we have a culture that is collaborative, inclusive, and centered around innovation and creativity. We believe in fostering a supportive environment where start-ups can come together to share <span style={{color:"#931727"}}>ideas</span>, <span style={{color:"#931727"}}>knowledge</span>, and <span style={{color:"#931727"}}>experiences</span>. </p>
          </div>
        </div>
        <div className="scroll-sections">
          <ScrollAnimation />
        </div>
        <div className="scroll-sections" style={{backgroundColor:"black"}}>
          <Ourpartner />
          <hr/>
          </div>
          <div className="scroll-sections" style={{backgroundColor:"white"}}>
          <Glimpses blog={props.blog}/>
          <hr/>
       </div>
      </div>
    </>
  );
};

export default Herosection;
