import React /*, { useState } */ from "react";
import Ourpartner from "../AboutUs/Ourpartner";
import "./Herosection.css";
import ScrollAnimation from "./Home/ScrollAnimation";
const Herosection = () => {
  // const [chng,setchng]=useState("./images/bulb.png");
  return (
    <>
      <div className="home-section-container scroll-sections">
        <div className="home-section-1-container">
          <div className="home-section-1-text" /*onMouseEnter={()=>{setchng("./images/bulb.png")}} onMouseLeave={()=>{setchng("./images/bulbblack.png")}} */>
            <div className="home-section-1-heading" >
              <div className="section-1-home-container1 ">
                <h3 className="removeonphone" >MII Foundation</h3>
                <img className="removeonlaptop" src="./images/Black logo - no background.png" alt="" />
              </div>
            </div>
            <div className="home-section-1-slogan">
              <h3 className="mii-slogan"> "Unlock <i class="fa-solid fa-key"></i> Your Business Potential"</h3>
            </div>
          </div>
          <div className="home-section-1-image removeonphone">
            <img className="hero-section-1-img" src="./images/chess-hero1.gif"/*{chng}*/ alt="" />
          </div>
        </div>


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
        <div className="scroll-sections">
          <Ourpartner />
        </div>
      </div>
    </>
  );
};

export default Herosection;
