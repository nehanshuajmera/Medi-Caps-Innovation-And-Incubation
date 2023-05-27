import React, { useState } from 'react'
import "./Contact.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Singlecontact() {
  const { id } = useParams();

  const [contact, setcontact] = useState(
    {
      name: "",
      phone: "",
      email: "",
      query: "",
      idea: "",
      message: ""
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target
    setcontact({
      ...contact,
      [name]: value
    })
  }
      const apicall=async ()=>{
        await axios.post(`/contactdetails`,contact).then((res) => { alert(res.data) }).catch((err)=>{console.log(err)});
      }
    


  return (
    <div className='who-form contactCss scroll-sections scroll-sections'>
    <div className='left'>
    <h1 style={{textAlign:"center"}}>{id}</h1>      

    <button onClick={()=>{apicall()}}>
      <span class="button_top"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Submit
      </span>
    </button>

    </div>
    <div className='right'>
    <input type='text' placeholder='Name' value={contact.name} onChange={handleChange} name="name"/>
    <input type='text' placeholder='Phone No.' value={contact.phone} onChange={handleChange} name="phone"/>
    <input type='text' placeholder='Email' value={contact.email} onChange={handleChange} name="email"/>
    <input type='text' placeholder='Reason for reaching out' value={contact.query} onChange={handleChange} name="query"/>
    <input type='text' placeholder='Idea' value={contact.idea} onChange={handleChange} name="idea"/>
    <input type='text' placeholder='Message' value={contact.message} onChange={handleChange} name="message"/>
    </div>
    
    
  </div>
  )
}
