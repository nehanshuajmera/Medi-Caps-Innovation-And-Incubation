import React from "react";
import "./Offering.css";
export default function Offering() {
  return (
    <>
      <div className="offering-main-container">
        {/* Section - 1 */}

        <div className="offering-section-1">
          <h6 className="offering-section-1-heading">Our Offering</h6>
          <img
            style={{ width: "60%" }}
            src="./images/hand-shaking.png"
            alt=""
          />
        </div>

        {/* <video src="F:\mii\client\public\images\event-video.mp4" type="video/mp4"></video> */}

        {/* Section - 2 */}

        {/* 
        <div className="offering-section-2">
          <div className="offering-section-2-left-container">
            <h3 style={{ fontSize: '30px' }}>MII Foundation offers two main services :</h3>
            <h3><i class="fa-solid fa-check"></i> Incubation</h3>
            <h3><i class="fa-solid fa-check"></i> Consulting</h3>
            <h3 style={{ fontSize: '30px' }}>To help start-ups grow and succeed.</h3>
          </div>
          <div className="offering-section-2-right-container removeonphone">
            <img src="./images/offering-img-1.png" alt="icon" />
          </div>
        </div> */}

        <div className="event-section-3-container  event-cnt">
          <img src="./images/single-event-image-2.jpg" alt="" />
          <div className='event-cnt-content'>
            <div className="offering-section-2-left-container">
              <h3 style={{ fontSize: '30px' }}>MII Foundation offers two main services :</h3>
              <h3><i class="fa-solid fa-check"></i> Incubation</h3>
              <h3><i class="fa-solid fa-check"></i> Consulting</h3>
              <h3 style={{ fontSize: '30px' }}>To help start-ups grow and succeed.</h3>
            </div>
          </div>
        </div>

        {/* Section - 3 */}

        <div className="offering-section-3">
          <h3 className="offering-section-3-heading">Incubation</h3>
          <div className="offering-section-3-layout">
            <div className="section-3-layout-items">
              <h3>Mentoring</h3>
              <div className="div-imposible">
                <p>Receive guidance and support from experienced professionals.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>Seed-Fund Investment</h3>
              <div className="div-imposible">
                <p> Get access to seed-fund investment to help grow your business.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>Access to Events</h3>
              <div className="div-imposible">
                <p>Connect with human resources professionals to help with hiring and HR needs.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>Co-working</h3>
              <div className="div-imposible">
                <p> Work in a collaborative environment with other start-ups.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>HR Access</h3>
              <div className="div-imposible">
                <p>Connect with human resources professionals to help with hiring and HR needs.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>Interns</h3>
              <div className="div-imposible">
                <p> Hire interns to help with your business operations.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>Research Support</h3>
              <div className="div-imposible">
                <p> Receive support with research and market analysis.</p>
              </div>
            </div>
            <div className="section-3-layout-items">
              <h3>Business Plan Development</h3>
              <div className="div-imposible">
                <p>  Get assistance with developing a solid business plan.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section - 4 */}

        <div className="offering-section-4-container">
          <div className="offering-section-4-layout">
            <div className="section-4-layout-items">
              <h3>Consulting</h3>
              <p>Get tailored support by filling out a form to let us know what you need help with.</p>

            </div>
            <div className="consulting-section">
              <p>
                "Choose MII Foundation to help bring your entrepreneurial vision to
                life. Get the support you need to grow your business and succeed."
              </p>
            </div>
          </div>
        </div>



      </div >

      {/* <div className="offering">
       

        <div className="main_heading">
          <div className="heading-text">
            <h2 style={{ fontSize: "50px", marginLeft: "30px" }}>
              MII Foundation offers two main services
            </h2>
            <h4 style={{ fontSize: "22px", marginLeft: "30px" }}>
              Incubation and Consulting - to help start-ups grow and succeed.
            </h4>
          </div>
          <div className="img-contain">
           
              <img
                src="https://www.aic-audf.org/wp-content/uploads/2021/10/business-team-discussing-ideas-startup_74855-4380.jpg"
                alt="icon"
              />
          </div>
        </div>

        
        <div className="Incubation">
          <h1 style={{ fontSize: "40px", marginLeft: "20px" }}>Incubation</h1>
          <div className="border">
            <>
              <div className="textincubation">Mentoring</div>
            </>
            <div className="minitext">
              Receive guidance and support from experienced professionals.
            </div>
            <>
              <div className="textincubation">Seed-Fund Investment</div>
            </>
            <div className="minitext">
              Get access to seed-fund investment to help grow your business.
            </div>
            <>
              <div className="textincubation">Access to Events</div>
            </>
            <div className="minitext">
              Attend events and network with other entrepreneurs.
            </div>
            <>
              <div className="textincubation">Co-working</div>
            </>
            <div className="minitext">
              Work in a collaborative environment with other start-ups.
            </div>
            <>
              <div className="textincubation">HR Access</div>
            </>
            <div className="minitext">
              Connect with human resources professionals to help with hiring and
              HR needs.
            </div>
            <>
              <div className="textincubation">Interns</div>
            </>
            <div className="minitext">
              Hire interns to help with your business operations.
            </div>
            <>
              <div className="textincubation">Research Support</div>
            </>
            <div className="minitext">
              Receive support with research and market analysis.
            </div>
            <>
              <div className="textincubation">Business Plan Development</div>
            </>
            <div className="minitext">
              Get assistance with developing a solid business plan.
            </div>
          </div>{" "}
        </div>
        <div className="Consulting">
          <h1 style={{ fontSize: "40px", marginLeft: "20px" }}>Consulting</h1>
          <div className="textconsulting">Support</div>
          <div className="con_minitext">
            Get tailored support by filling out a form to let us know what you
            need help with.
          </div>
        </div>
        <div className="notation">
          <h2 style={{ padding: "130px", textAlign: "center" }}>
            "Choose MII Foundation to help bring your entrepreneurial vision to
            life. Get the support you need to grow your business and succeed."
          </h2>
        </div>
      </div> */}
    </>
  );
}
