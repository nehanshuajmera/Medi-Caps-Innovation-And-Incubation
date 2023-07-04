import React from 'react'
import './Event.css'

const event = () => {
  return (
    <div>
    <h2><span className="eventlist-title-date">Tomorrow</span></h2>
    <div class="event-card-body">
    <h3 class="event-card-summary">Independence Day holiday</h3>
<p class="event-card-time" data-event-start="2023-07-04T00:00:00" data-event-allday="true"><span class="svg-container"><svg viewBox="0 0 20 20" class="svg-clock">
      <title>Day</title>
	  </svg></span>Tue 7/4</p>
<div class="event-card-flex">
</div>
<p class="event-card-category">UCLA<span class="subcalendar"><span class="subcalendar-spacer"> • </span><a href="/ucla/holidays" title="Holidays">Holidays</a></span></p>
</div>  
    </div>
  )
}

export default event