import React from 'react'

export default function Header() {
  return (
    <div>
      <div id="Top_bar">
        <div className="container">
          <div className="column one">
            <div className="top_bar_left clearfix">
              <div className="logo">
                <a id="logo" href="index-lottie.html" title="BeLottie - Betheme" data-height={60} data-padding={15}><img className="logo-main scale-with-grid svg" src="content/lottie/images/lottie.svg" data-retina data-height alt="lottie" data-no-retina /><img className="logo-sticky scale-with-grid svg" src="content/lottie/images/lottie.svg" data-retina data-height alt="lottie" data-no-retina style={{}} /><img className="logo-mobile scale-with-grid svg" src="content/lottie/images/lottie.svg" data-retina data-height alt="lottie" data-no-retina style={{}} /><img className="logo-mobile-sticky scale-with-grid svg" src="content/lottie/images/lottie.svg" data-retina data-height alt="lottie" data-no-retina style={{}} /></a>
              </div>
              <div className="menu_wrapper"><nav id="menu" role="navigation" aria-expanded="false" aria-label="Main Menu">
                <ul id="menu-main-menu" className="menu menu-main">
                  <li className="current-menu-item page_item current_page_item"> <a href="index-lottie.html"><span>Home</span></a> </li>
                  <li> <a href="content/lottie/about.html"><span>About</span></a> </li>
                  <li> <a href="content/lottie/pricing.html"><span>Pricing</span></a> </li>
                  <li className> <a href="content/lottie/news.html"><span>News</span></a> </li>
                  <li className="menu-item _type object-post last"> <a href="content/lottie/post.html"><span>Article</span></a> </li>
                  <li className="last"> <a href="content/lottie/contact.html"><span>Contact</span></a> </li>
                </ul>
              </nav> <a className="responsive-menu-toggle" href="#" aria-label="Mobile menu"><i className="icon-menu-fine" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
