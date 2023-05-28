import React, { useState } from 'react'
import Blog from '../Pages/Blog/Blog'
import Event from '../Pages/Event/Event'
import './adminbody.css'
import ContactQuery from '../Pages/ContactQuery/ContactQuery';
export default function AdminBody() {
  const [admincontent, setadmincontent] = useState("blog");
  return (
    <div >
        <div className='admin-options'>
        <div onClick={()=>{setadmincontent("blog")}} className='single-admin-option' >
            <i class="fa-sharp fa-solid fa-pager fa-9x"></i>
            <h1>Blogs</h1>
        </div>
    
        <div onClick={()=>{setadmincontent("event")}} className='single-admin-option'>
        <i class="fa-solid fa-calendar-days fa-9x"></i>
            <h1>Events</h1>
        </div>
        <div onClick={()=>{setadmincontent("query")}} className='single-admin-option'>
        <i class="fa-solid fa-address-book fa-8x"></i>
            <h1>Query</h1>
        </div>
        </div>
        {admincontent==="blog"?<Blog/>:<></>}
        {admincontent==="event"?<Event/>:<></>}
        {admincontent==="query"?<ContactQuery/>:<></>}
    </div>
  )
}
