import React from 'react'

export default function Mainblog(props) {
  return (
    <div>
        <div className="blog-section-1-box scroll-sections">
          <div className="blog-section-1-left-box">
            <img src={props.img} alt="dfjfj" />
          </div>
          <div className="blog-section-1-right-box">
            <div class="blog-feed-grid-col -right">
              <div class="blog-feed-date">{props.image}</div>
              <div class="blog-feed-title">{props.title}</div>
              <div class="blog-feed-description">{props.description}</div>
              {/* <div class="blog-feed-link">
                <a href="https://unizen-io.medium.com/unizen-partners-with-gec-for-doge-1-spacex-mission-8db59866c69d" target="_blank" rel="noopener">Read more</a>
              </div> */}
            </div>
          </div>
        </div>
    </div>
  )
}
