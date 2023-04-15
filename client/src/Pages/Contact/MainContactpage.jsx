import React from 'react'

export default function MainContactpage(props) {
  return (
    <div className='maincontactpage scroll-sections'>
        <h1>Who Am I ?</h1>
        <div className='main-btn'>
        <button class="button-who-am-i" onClick={()=>{props.setsection("startupfounder")}}> Start-Up Founder</button>
        <button class="button-who-am-i" onClick={()=>{props.setsection("investor")}}> Investor</button>
        <button class="button-who-am-i" onClick={()=>{props.setsection("generalquery")}}> General Query</button>
        </div>
        <div className='main-btn'>
        <button class="button-who-am-i" onClick={()=>{props.setsection("ideaowner")}}> Idea Owner</button>
        <button class="button-who-am-i" onClick={()=>{props.setsection("student")}}> Student</button>
        <button class="button-who-am-i" onClick={()=>{props.setsection("mentor")}}> Mentor</button>
        </div>
    </div>
  )
}
