import React from "react";
import "./Glimpses.css";

const Glimpses = () => {
  return (
    <div>
      <div className="glimpses-container">
        <div className="glimpses-header">
          <h1
            className="glimpses-h1"
            style={{ fontSize: "50px", fontFamily: "Inter" }}
          >
            Recent blog <br />
            posts
          </h1>
          <button className=" button glimpses-btn-seeall">
            See all articles
          </button>
        </div>

        <div className="blog-container-glimpses">
          <div className="blog-1">
            <div className="blog-photo">
              <img
                src="https://www.zenxlabs.io/assets/img/media/gec.jpeg?2"
                alt="blog" width={"335"} height={"200"}
              />
            </div>
            <div className="blog-text">
              <h2>Unizen partners with GEC for DOGE-1 SpaceX mission</h2>
              <p>
                GEC is a leading tech and research pioneer, focused on energy,
                engineering, space, development, and decentralization.
                Currently, GEC is working on building and launching DOGE-1…
              </p>
            </div>
          </div>
          <div className="blog-2">
            <div className="blog-photo">
              <img
                className="img-1"
                src="https://www.zenxlabs.io/assets/img/media/stable.png?2"
                alt="blog" width={"335"} height={"200"}
              />
            </div>
            <div className="blog-text">
              <h2>ZenX Labs Is Accelerating Stablecomp</h2>
              <p>
                Stablecoins are now among DeFi’s most valuable assets. USDT with
                a market cap of 73.89B, is the fourth most used currency in the
                market. USD Coin (USDC) also makes the top 10 with its 34B
                value…
              </p>
            </div>
          </div>
          <div className="blog-3">
            <div className="blog-photo">
              <img
                src="https://www.zenxlabs.io/assets/img/media/geeq.png?2"
                alt="blog" width={"335"} height={"200"}
              />
            </div>
            <div className="blog-text">
              <h2>Geeq Joins Unizen ZenX Accelerator Program</h2>
              <p>
                Blockchain pioneer Geeq announced today that it has been
                selected to join the Unizen ZenX Incubator in the acceleration
                program. The…
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
