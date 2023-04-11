import React from 'react'
import "./scrollanimation.css"
export default function ScrollAnimation() {
  return (
    <div className='scroll-animation-homepage'>
      <section class="scroll">
        <div class="scroll__view no-skrollr" id="scrollslider" data-current="1">
          <div class="scroll__content scroll__hero is-alwayssticky">
            <div class="scroll__sectionwrapper " style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
              <div className='scroll-section-image'>
                <img src="./images/creative.png" alt="" />
                {/* <i class="fa-solid fa-chess fa-9x"></i> */}
              </div>
            </div>
          </div>
          <div class="scroll__overlays" >
            <div class="scroll__content is-desktopsticky">
              <div class="scroll__sectionwrapper">
                <div class="scroll__text">
                  <div style={{ color: "#000000", margin: '0px' }}>
                    <h1 style={{
                      fontSize: "80px"
                    }} >Ideation  <i class="fa-solid fa-chess-pawn"></i></h1>
                    <p style={{
                      margin: '0px',
                      fontSize: "24px",
                      lineHeight: "35px",
                      opacity: ".5"
                    }}>Ideation, technology, compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="scroll__content is-desktopsticky">
              <div class="scroll__sectionwrapper">
                <div class="scroll__text">
                  <div style={{ color: '#000000' }}>
                    <h1 style={{
                      fontSize: "80px",
                      color: '#000000'
                    }} >Incubation <i class="fa-solid fa-chess-bishop"></i></h1>
                    <p style={{
                      fontSize: "24px",
                      lineHeight: "35px",
                      opacity: ".5"
                    }}>Ideation, technology, compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="scroll__content is-desktopsticky">
              <div class="scroll__sectionwrapper">
                <div class="scroll__text">
                  <div style={{ color: "#000000" }}>
                    <h1 style={{
                      fontSize: "70px"
                    }} >Acceleration <i class="fa-solid fa-chess-queen"></i></h1>
                    <p style={{
                      fontSize: "24px",
                      lineHeight: "35px",
                      opacity: ".5"
                    }}>Ideation, technology, compliance</p></div>          </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
