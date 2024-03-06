import React, { useState } from 'react'
import Blog from '../Pages/Blog/Blog'
import Event from '../Pages/Event/Event'
import './adminbody.css'

import axios from "axios"
import { useNavigate } from "react-router-dom"


import ContactQuery from '../Pages/ContactQuery/ContactQuery';
import Testimonials from '../Pages/Testimonials/Testimonials'
import AddBanner from '../Pages/Event/AddBanner'
export default function AdminBody() {
  const [admincontent, setadmincontent] = useState("blog");
  const history = useNavigate();

  async function logout() {
    try {
      await axios.get("admin/logout").then((res)=>{alert("Logged out successfully"); window.location.reload()})
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div >
      <h1 style={{textAlign:"center",fontSize:"4em"}}>AdminPanel</h1>
      <nav className="nav-bar">
       <div className="left-align">
         <h1 className="nav-link text-white" style={{fontSize:"30px",textTransform:"capitalize"}}>{admincontent}</h1>
        </div>
         <div className="right-align">
           <button className="logout-btn text-white" onClick={()=>{logout()}}>Log out <i className="fa fa-sign-out fa-1x" aria-hidden="true"></i></button>
          </div>   
        </nav>

        <div className='admin-options'>
        <div onClick={()=>{setadmincontent("blog")}} className={admincontent==="blog"?'single-admin-option page-active-btn':'single-admin-option'} >
            <p><i className="fa-sharp fa-solid fa-pager"></i> Blogs</p>
        </div>
    
        <div onClick={()=>{setadmincontent("event")}} className={admincontent==="event"?'single-admin-option page-active-btn':'single-admin-option'}>
        <p><i className="fa-solid fa-calendar-days "></i> Events</p>
        </div>
        <div onClick={()=>{setadmincontent("banner")}} className={admincontent==="banner"?'single-admin-option page-active-btn':'single-admin-option'}>
        <p><i className="fa-solid fa-calendar-days "></i> Banner</p>
        </div>
        <div onClick={()=>{setadmincontent("query")}} className={admincontent==="query"?'single-admin-option page-active-btn':'single-admin-option'}>
        <p><i className="fa-solid fa-address-book"></i> Query</p>
        </div>
        <div onClick={()=>{setadmincontent("testimonial")}} className={admincontent==="testimonial"?'single-admin-option page-active-btn':'single-admin-option'}>
        <p><i className="fa-solid fa-address-book"></i> Testmonials</p>
        </div>
        </div>
        <br/>
        {admincontent==="blog"?<Blog/>:<></>}
        {admincontent==="event"?<Event/>:<></>}
        {admincontent==="banner"?<AddBanner/>:<></>}
        {admincontent==="query"?<ContactQuery/>:<></>}
        {admincontent==="testimonial"?<Testimonials/>:<></>}
    </div>
  )
}
