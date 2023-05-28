import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const AddBlog = () => {
  
  const [FormData,setFormData]=useState({
    images:"",
    description:"",
    title:"",
    authername:"",
    date:"",
  });
  
  
 
  const handleChange = e => {
      const { name, value } = e.target
      setFormData({
          ...FormData,
          [name]: value
      })
  }
  async function submit() {
    try {
      await axios.post("/blog/addblog",FormData)
      .then(()=>{alert("Blog added successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  

  return (
    <div>
    <div className="add-area add_event_area" id='add_event_area'>
            {/* html of Event to add */}        
           <p>Add new Blog</p>
           <div>
                <input type="text" id="" className='eventtitle' placeholder='Title'  onChange={ handleChange } name="title" value={FormData.title}/>
                <textarea  id="" cols="30" rows="10"placeholder='Event discription'  onChange={ handleChange } name="description" value={FormData.description} required/>
                <div className="small-box-area" >
                  <input type="date"  onChange={ handleChange } name="date" value={FormData.date} />
                  {/* <label htmlFor="eventTime">Time : </label> */}
                 
                </div>
                <div className="small-box-area">
                <input type="text" onChange={ handleChange } name="authername" value={FormData.authername} placeholder='Author Name'/>
                </div>
                
                <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i class="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img" id="" />
                </div>
                <button onClick={()=>{submit()}} id='blog-txt-add' >Add</button>
                <button type="reset">Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddBlog
