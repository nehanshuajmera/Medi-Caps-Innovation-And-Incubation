import React, { useState } from "react";
import './Ourpartner.css';
import Images from './Ourpartner_images.jsx';

function Ourpartner() {
  const [partner, setpartner] = useState("");
  return (
    <>
      <div  style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className="ourpartner-main-container scroll-sections">
        <div className="home-sec6-main" style={{width:"100%"}}>
          <div className="home-sec6-start">
            <h1 className="home-sec6-h1">Our Partners</h1>
            <Images  setpartner={setpartner}/>
            <p className="home-sec6-text">
              {partner}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourpartner;