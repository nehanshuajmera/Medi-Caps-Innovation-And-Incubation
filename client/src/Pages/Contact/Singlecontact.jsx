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
      message: "",
      page:id
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
        
        const{name,phone,email,query,idea,message}=contact;
        if(!name|!phone|!email|!query|!idea|!message){
          alert("Incomplete Details");
          return;
       }
       var emailregex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      if (!emailregex.test(email)){
        alert("Invalid Email");
        return;
      }
      if(phone.length>12){
        alert("Invalid Phone No.");
        return;
      }
        await axios.post(`/contactdetails`,contact).then((res) => { alert(res.data); window.location.reload()})
        .catch((err)=>{console.log(err)});
      }
    
      const [display, setDisplay] = useState(window.innerWidth > 1024 ? true : false);


  return (
    <div className='who-form contactCss'>
    <div className='left'>
    <h1 style={{textAlign:"center"}}>{id}</h1>      

    {display ?<button onClick={()=>{apicall()}}>
      <span className="button_top"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Submit
      </span>
    </button>:<></>}
    
    </div>
    <div className='right'>
    <input type='text' placeholder='Name' value={contact.name} onChange={handleChange} name="name"/>
    <input type='text' placeholder='Phone No.' value={contact.phone} onChange={handleChange} name="phone"/>
    <input type='text' placeholder='Email' value={contact.email} onChange={handleChange} name="email"/>
    <input type='text' placeholder='Reason for reaching out' value={contact.query} onChange={handleChange} name="query"/>
    <input type='text' placeholder='Idea' value={contact.idea} onChange={handleChange} name="idea"/>
    <input type='text' placeholder='Message' value={contact.message} onChange={handleChange} name="message"/>
    </div>
    
   {!display ?<button onClick={()=>{apicall()}}>
      <span className="button_top"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Submit
      </span>
    </button>:<></>}
    
  </div>
  )
}
