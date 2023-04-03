import React from "react";
import './Ourpartner.css';
import Images from './Ourpartner_images.jsx';

function Ourpartner() {
  return (
    <>
      <div className="ourpartner-main-container">
        <div className="home-sec6-main">
          <div className="home-sec6-start">
            <h1 className="home-sec6-h1" style={{ textAlign: 'center', fontSize: '36px' }}>From concept to wide Adoption</h1>
            {/* <h1 className="home-sec6-h1">to wide adoption</h1> */}
            <Images />
            <p className="home-sec6-text">MII Foundation is a full-scale incubator that prepares decentralized innovation for global use. To prepare the project for wide adoption, we assure full compliance, set up collaborations with global financial institutions, investment funds, governments. MII is a space where highly practical ideas that could potentially impact millions
              (or better, billions) receive the support they deserve.
            </p>
            {/* <button className="home-sec6-button">Read more</button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourpartner;