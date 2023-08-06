import React /*, {Component}*/ from 'react';
import './Ourpartner.css';
import Carousel from 'react-elastic-carousel';


const breakPoints = [
    {width: 1 , itemsToShow: 1},
    {width: 550 , itemsToShow: 2},
    {width: 768 , itemsToShow: 3},
    {width: 1200 , itemsToShow: 4},
]

const Ourpartner_images = ({setpartner}) =>{
    return(
        <div className='home-sec6-carousel'>
            <Carousel buttonsVisibility="Visible" breakPoints={breakPoints}>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("Paytm ka content")}} ><img src="./images/OurPatner/paytm.png" className="home-sec6-img" alt="Paytm"/></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("Mp startup ka content")}} ><img src="./images/OurPatner/mp-startup-centre.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("startup india ka content")}} ><img src="./images/OurPatner/start-up-india-logo.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("msme ka content")}} ><img src="./images/OurPatner/msme.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("make in india ka content")}} ><img src="./images/OurPatner/makeinindia.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("leverage Growth ka content")}} ><img src="./images/OurPatner/leveragedgrowth.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"onMouseEnter={()=>{setpartner("ACE indore ka content")}} ><img src="./images/OurPatner/aceindore.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("comming soon content")}} ><img src="./images/OurPatner/drishti_logo.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("comming soon content")}} ><img src="./images/OurPatner/iitkgp.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("comming soon content")}} ><img src="./images/OurPatner/entrepreneurroof.jpeg" className="home-sec6-img" alt="" /></div>
            </Carousel>
        </div>
    )
}   
export default Ourpartner_images;