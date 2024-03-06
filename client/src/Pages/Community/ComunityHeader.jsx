import React from 'react'
import './communityheader.css'
import { NavLink } from 'react-router-dom'

export default function ComunityHeader() {
  return (
    <div className='community-header-box'>
         <NavLink to="/event">Event</NavLink>
          <NavLink to="/article">Blogs</NavLink>
    </div>
  )
}
