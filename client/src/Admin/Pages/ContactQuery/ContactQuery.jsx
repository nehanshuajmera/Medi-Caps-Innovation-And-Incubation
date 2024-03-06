import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContact from './SingleContact';
import './contactquery.css'
export default function ContactQuery() {
   const [Query, setQuery] = useState([]);
    const apicall=async ()=>{
        await axios.get(" /contactdetails/allquery").then((res) => { setQuery(res.data) });
      }
      useEffect(() => {
        apicall();
      }, [])

  return (
    <div className="query-component">
         {/* <h1>Query's</h1> */}
         <table>
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Date</th>
    <th>Idea</th>
    <th>Message</th>
    <th>Page</th>
  </tr>
        {Query.map((item) => {
         return <SingleContact props={item}/>
        })}
  </table>
    </div>
  )
}
