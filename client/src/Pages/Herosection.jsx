import React from "react";
import Ourpartner from "../AboutUs/Ourpartner";
import "./Herosection.css";
import ScrollAnimation from "./Home/ScrollAnimation";
const Herosection = () => {
  return (
    <>
      <div className="home-section-container">
        <div className="home-section-1-container">
          <div className="section-1-text">
            <div className="section-1-heading">
              <h3 className="section-1-home-container1">MI</h3>
              <h3 className="section-1-home-container2">I&nbsp;</h3>
              <h3 className="section-1-home-container3">Foundation</h3>
            </div>
            <div className="section-1-slogan">
              <h3 className="mii-slogan">"Unlock Your Business Potential"</h3>
            </div>
          </div>
          <div className="section-1-image">
            <img className="hero-section-1-img" src="./images/miiiii.gif" alt="" />
          </div>
        </div>
        <div className="section2-home-page">.
          <div className="section2-container">
            <div className="section2-heading">
              <h1>Create a perfect ecosystem for your business</h1>
            </div>
            <div className="section2-content">
              <p>MII Foundation, a Section-8 company based in India, is an
                incubator dedicated to supporting and nurturing innovative
                start-ups at Medi-Caps University in Indore. As a start-up
                incubator, MII Foundation provides a collaborative and inclusive
                environment for entrepreneurs to grow their businesses.</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollAnimation />
      <Ourpartner />
    </>
  );
};

export default Herosection;
