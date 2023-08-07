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
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("India's leading digital payment platform offering online transactions, mobile recharges, bill payments, and financial services to millions of users.MII Foundation Paterned with")}} ><img src="./images/OurPatner/paytm.png" className="home-sec6-img" alt="Paytm"/></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner(" A government initiative in Madhya Pradesh, India, providing resources and support to nurture startups and promote entrepreneurship.")}} ><img src="./images/OurPatner/mp-startup-centre.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("Startup India: Indian government's flagship program to promote startups, foster innovation, and create a conducive ecosystem for entrepreneurship.")}} ><img src="./images/OurPatner/start-up-india-logo.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner(" Micro, Small, and Medium Enterprises; vital contributors to the Indian economy, providing employment and driving industrial growth.")}} ><img src="./images/OurPatner/msme.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("Government campaign encouraging domestic and foreign companies to manufacture products in India, promoting economic growth and self-reliance.")}} ><img src="./images/OurPatner/makeinindia.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("An organization focused on empowering startups with mentorship, funding, and networking opportunities to accelerate their growth.")}} ><img src="./images/OurPatner/leveragedgrowth.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox"onMouseEnter={()=>{setpartner("An initiative by IIT Indore supporting startups through incubation, mentoring, and access to resources.")}} ><img src="./images/OurPatner/aceindore.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("IIT Indore's Center for Innovation, Incubation, and Entrepreneurship, fostering creative thinking and entrepreneurial endeavors.")}} ><img src="./images/OurPatner/drishti_logo.png" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("Entrepreneurship Cell at IIT Kharagpur promoting startup culture, providing guidance, and organizing events to nurture entrepreneurial spirit.")}} ><img src="./images/OurPatner/iitkgp.jpeg" className="home-sec6-img" alt="" /></div>
                <div className="home-sec6-imgbox" onMouseEnter={()=>{setpartner("Elevating startups with mentorship, resources, and networking for innovation, growth, and success in a dynamic marketplace.")}} ><img src="./images/OurPatner/entrepreneurroof.jpeg" className="home-sec6-img" alt="" /></div>
            </Carousel>
        </div>
    )
}   
export default Ourpartner_images;