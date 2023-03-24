import React from "react";
import "./Herosection.css";
const Herosection = () => {
  return (
    <>
      <div className="container">
        <div className="left_container">
          <div className="text">
            <div className="row">
              <div class="row mcb-wrap_inner">
                <div class="col-md-8 mcb_item_custom1321 tablet-one mobile-one column_heading">
                  <div class="mcb-column-inner">
                    <h1 class="title">Dive into the world of animation</h1>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="no_line" style={{ margin: 0 + "20px" }}></hr>
        <div className="text_area">
          <div className="left_text">
            <p>Make your content alive with motion designed illustrations</p>
          </div>
          <div className="right_text">
            <img
              src="https://beantown.website/html/be/html/content/lottie/images/Animation.gif"
              alt=""
            />
          </div>
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
              src="https://beantown.website/html/be/html/content/lottie/images/lottie-home-icon1.svg"
              alt="icon"
            />
            <p>Lorem ipsum dolor mit samet et omnia</p>
          </div>
        </div>
      </div>

      <div className="simple_text">
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
      </div>
    </>
  );
};

export default Herosection;
