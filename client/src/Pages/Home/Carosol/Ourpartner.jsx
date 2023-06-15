import React from "react";
import './Ourpartner.css';
import Images from './Ourpartner_images.jsx';

function Ourpartner() {
  return (
    <>
      <div className="ourpartner-main-container scroll-sections">
        <div className="home-sec6-main">
          <div className="home-sec6-start">
            <h1 className="home-sec6-h1" style={{ fontSize: '50px', fontFamily: 'Inter' }}>From concept to wide Adoption</h1>
            <Images />
            <p className="home-sec6-text">MII Foundation is a full-scale incubator that prepares decentralized innovation for global use. To prepare the project for wide adoption, we assure full compliance, set up collaborations with global financial institutions, investment funds, governments. MII is a space where highly practical ideas that could potentially impact millions
              (or better, billions) receive the support they deserve.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourpartner;