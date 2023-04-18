import React from 'react'
import './testimonials.css'
export default function Testimonials() {
  return (
    <div className='testimonial-box'>
      <div className='testimonial-main-container-homepage'>
        <h5 className="testimonial-main-heading-text">Testimonials</h5>
        <div className="testimonial-image-container">
          <figure className="snip1574">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="profile-sample2" />
            <figcaption>
              <blockquote>
                <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
              </blockquote>
              <h3>Sue Shei</h3>
              <h5>Founder</h5>
            </figcaption>
          </figure>
          <figure className="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample37.jpg" alt="profile-sample7" />
            <figcaption>
              <blockquote>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. quisquam, harum nam eius praesentium amet cumque consequuntur?</p>
              </blockquote>
              <h3>Will Barrow</h3>
              <h5>Web Designer</h5>
            </figcaption>
          </figure>
          <figure className="snip1574"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample35.jpg" alt="profile-sample6" />
            <figcaption>
              <blockquote>
                <p>The only skills I have the patience to learn are those that have no real application in life. </p>
              </blockquote>
              <h3>Indigo Violet</h3>
              <h5>Public Relations</h5>
            </figcaption>
          </figure>
        </div>
      </div>
      <hr style={{ width: '86%', margin: 'auto'}} />
    </div>
  )
}
