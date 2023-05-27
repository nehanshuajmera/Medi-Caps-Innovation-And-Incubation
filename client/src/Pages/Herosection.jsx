import React /*, { useState } */ from "react";
import Ourpartner from "../AboutUs/Ourpartner";
import "./Herosection.css";
import ScrollAnimation from "./Home/ScrollAnimation";

const Herosection = () => {
  return (
    <>
      <div className="home-section-container scroll-sections">
        
        <div className="section2-home-page home-section2-container scroll-sections">
          <div className="home-section2-heading">
            <h1>Create a perfect ecosystem for your business</h1>
          </div>
          <div className="home-section2-content">
            <p>MII Foundation, a Section-8 company based in India, is an
              incubator dedicated to supporting and nurturing innovative
              start-ups at Medi-Caps University in Indore. As a start-up
              incubator, MII Foundation provides a collaborative and inclusive
              environment for entrepreneurs to grow their businesses.</p>
          </div>
        </div>
        <div className="scroll-sections">
          <ScrollAnimation />
        </div>
        <div className="scroll-sections" style={{backgroundColor:"black"}}>
          <Ourpartner />
          <hr/>
        </div>
      </div>
    </>
  );
};

export default Herosection;
