import React from "react";
import "./Offering.css";
export default function Offering() {

  return (
    <div className="offering-main-container ">

      {/* Section - 1 */}
      <div className="offering-section-1-container scroll-sections">
        <div className="offering-section-1-image">
          <div className="section-1-offering-heading1">
            <h3>MII Foundation</h3>
            <h3>offers two main services :</h3>
          </div>
          <div className="section-1-offering-heading2">
            <div className="offering-section-1-sub-heading">
              <h3>Incubation</h3>
            </div>
            <div className="offering-section-1-sub-heading">
              <h3>Consulting</h3>
            </div>
          </div>
          <div className="section-1-offering-heading3">
            <h3>To help start-ups grow and succeed.</h3>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="event-section-3-container  event-cnt scroll-sections">
        <img src="./images/single-event-image-2.jpg" alt="" />
        <div className='event-cnt-content'>
          <div className="offering-section-2-left-container">
            <h3 style={{ fontSize: '30px', color: 'black' }}>MII Foundation offers two main services :</h3>
            <h3><i class="fa-solid fa-check"></i> Incubation</h3>
            <h3><i class="fa-solid fa-check"></i> Consulting</h3>
            <h3 style={{ fontSize: '30px' }}>To help start-ups grow and succeed.</h3>
          </div>
        </div>
      </div>

      {/* Section - 3 */}

      <div className="offering-section-3 scroll-sections">
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

      <div className="offering-section-4-container scroll-sections">
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
  );
}
