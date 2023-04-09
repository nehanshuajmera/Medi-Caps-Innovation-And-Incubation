import React /*, { useState } */ from "react";
// import Ourpartner from "../AboutUs/Ourpartner";
import "./Herosection.css";
import ScrollAnimation from "./Home/ScrollAnimation";
import Testimonials from "./Home/Testimonials";
const Herosection = () => {
  // const [chng,setchng]=useState("./images/bulb.png");
  return (
    <>
      <div className="home-section-container">
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
            <img className="hero-section-1-img" src="./images/bulb.png"/*{chng}*/ alt="" />
          </div>
        </div>


        <div className="section2-home-page home-section2-container">.
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
        <ScrollAnimation />
        {/* <Ourpartner /> */}
        <Testimonials />
      </div>
    </>
  );
};

export default Herosection;
