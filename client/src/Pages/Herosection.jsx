import React from "react";
import "./Herosection.css";
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
              <h3 className="mii-slogan">
                "Unlock Your Business Potential"
              </h3>
            </div>
          </div>
          <div className="section-1-image">
            <img className="hero-section-1-img" src="./images/miiiii.gif" alt="" />
          </div>
        </div>

        <div className="simple_text">
          <div className="left_simple">
            <div className="icon-wapper">
              <img
                src="https://beantown.website/html/be/html/content/lottie/images/lottie-home-icon1.svg"
                alt="icon"
              />
              <p>Lorem ipsum dolor mit samet et omnia</p>
            </div>
          </div>
          <div className="right_simple">
            <div className="icon-wapper">
              <img
                src="https://beantown.website/html/be/html/content/lottie/images/lottie-home-icon1.svg" alt="icon"/>
              <p>Lorem ipsum dolor mit samet et omnia</p>
            </div>
          </div>
        </div>

      </div>


      {/* <div className="simple_text">
        <div className="left_img">
          <img
            class="scale-with-grid"
            src="https://beantown.website/html/be/html/content/lottie/images/lottie-home-pic1.webp"
            alt="lottie-home-pic1"
            width="1374"
            height="1190"
          />
        </div>
        <div className="right_img_text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            alias fugiat dolorem magni hic expedita accusamus quos obcaecati
            enim eos sapiente laudantium officia, minima quasi voluptas animi,
            nulla placeat beatae.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default Herosection;
