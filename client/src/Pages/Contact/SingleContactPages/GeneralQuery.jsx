import React from 'react'
import "../Contact.css"
 
export default function GeneralQuery() {
  return (
    <div  className="who-form contactCss scroll-sections scroll-sections">
    <div className='left'>
    <h1 style={{textAlign:"center"}}>General Query</h1>      

    <button>
      <span className="button_top"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Submit
      </span>
    </button>

    </div>
    <div className='right'>
    <input type='text' placeholder='Name' />
    <input type='text' placeholder='Phone No.' />
    <input type='text' placeholder='Email' />
    <input type='text' placeholder='Reason for reaching out' />
    <input type='text' placeholder='Idea' />
    <input type='text' placeholder='Message' />
    </div>
    
    
  </div>

  )
}
