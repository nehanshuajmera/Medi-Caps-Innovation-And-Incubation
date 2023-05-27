import React from "react";
import { useEffect, useState } from 'react'
import "./Article.css";
import axios from "axios";
export default function Article() {

    const [openform,setopenform]=useState(false);
    // const [sign,setSign] =useState('plus');
    
    
    const [blogs, setblogs] = useState();
    const apicall=async ()=>{
        await axios.get("blog/allblogs").then((res) => { console.log("Data",res) });
      }
    
      useEffect(() => {
        apicall();
      }, [])


  return (
    <div>
      <div className="blog-section">
        <div className="blog-section-1-box scroll-sections">
          <div className="blog-section-1-left-box">
            <img src="https://www.zenxlabs.io/assets/img/media/gec.jpeg?2" alt="dfjfj" />
          </div>
          <div className="blog-section-1-right-box">
            <div class="blog-feed-grid-col -right">
              <div class="blog-feed-date">10 Nov, 2021</div>
              <div class="blog-feed-title">Unizen partners with GEC for DOGE-1 SpaceX mission</div>
              <div class="blog-feed-description">GEC is a leading tech and research pioneer, focused on energy, engineering, space, development, and decentralization. Currently, GEC is working on building and launching DOGE-1...</div>
              {/* <div class="blog-feed-link">
                <a href="https://unizen-io.medium.com/unizen-partners-with-gec-for-doge-1-spacex-mission-8db59866c69d" target="_blank" rel="noopener">Read more</a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="blog-section-2-box scroll-sections">
          <div className="blog-box-1">
            <div className="blog-box-img-1">
              <img src="https://www.zenxlabs.io/assets/img/media/stable.png?2" alt="" /></div>
            <div className="blog-box-date">13 Oct, 2021</div>
            <div className="blog-box-1-title">MII Is Accelerating Stablecomp</div>
            <div className="blog-box-description">Stablecoins are now among DeFi’s most valuable assets. USDT with a market cap of 73.89B, is the fourth most used currency in the market. USD Coin (USDC) also makes the top 10 with its 34B value…</div>
          </div>
          <div className="blog-box-1">
            <div className="blog-box-img-1">
              <img src="https://www.zenxlabs.io/assets/img/media/geeq.png?2" alt="" /></div>
            <div className="blog-box-date">21 Oct, 2021</div>
            <div className="blog-box-1-title">Geeq Joins Unizen ZenX Accelerator Program</div>
            <div className="blog-box-description">Blockchain pioneer Geeq announced today that it has been selected to join the Unizen ZenX Incubator in the acceleration program. The…</div>
          </div>
          </div>
          <div className="blog-section-2-box scroll-sections">
            <div className="blog-box-1">
              <div className="blog-box-img-1">
                <img src="https://www.zenxlabs.io/assets/img/media/alkimi.png?2" alt="" /></div>
              <div className="blog-box-date">21 Oct, 2021</div>
              <div className="blog-box-1-title">MIIs Is Accelerating Alkimi</div>
              <div className="blog-box-description">Alkimi is a blockchain-based ad exchange where advertising is priced, distributed, and measured while reducing irrelevant ads and spam. The platform is powered by Constellation Networks Hyperg…</div>
            </div>
            <div className="blog-box-1">
              <div className="blog-box-img-1">
                <img src="https://www.zenxlabs.io/assets/img/media/whaleroom.png?2" alt="" /></div>
              <div className="blog-box-date">21 Oct, 2021</div>
              <div className="blog-box-1-title">WhaleRoom Is Accelerated By MIIs</div>
              <div className="blog-box-description">The development of decentralized technology and investing in crypto assets rely on cooperation. Communities help with finding out about new projects, rating exchanges and wallets, sharing…</div>
            </div>
          </div>
          <div className="blog-section-2-box scroll-sections">
            <div className="blog-box-1">
              <div className="blog-box-img-1">
                <img src="https://www.zenxlabs.io/assets/img/media/2.jpg?2" alt="" /></div>
              <div className="blog-box-date">21 Oct, 2021</div>
              <div className="blog-box-1-title">ZenX Incubatee Cirus Foundation Sold Out $CIRUS Token In 10 Seconds On The First IDO</div>
              <div className="blog-box-description">We are happy to inform you that ZenX’s incubated project, Cirus Foundation, sold out in 10 seconds on its first IDO.</div>
            </div>
            <div className="blog-box-1">
              <div className="blog-box-img-1">
                <img src="https://www.zenxlabs.io/assets/img/media/3.jpg?2" alt="" /></div>
              <div className="blog-box-date">21 Oct, 2021</div>
              <div className="blog-box-1-title">Why Centralised Decentralised Finance (CeDeFi) and Self-sovereign Identity (SSI) Work Together</div>
              <div className="blog-box-description">The idea of CeDeFi — the combination of Centralised and Decentralised Finance — unites two ways of interacting...</div>
            </div>
          </div>

        {/* <div className="blog-button">
          <div className="blog-section-3-readmore scrol-sections">
            Read more
          </div>
        </div> */}
        {/* {blogs.map((item) => {
         return <blog id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date}/>
        })} */}
      </div>
    </div>
  );
}

