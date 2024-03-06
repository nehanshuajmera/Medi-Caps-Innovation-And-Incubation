import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';


const AddTestimonials = () => {
  const [FormData,setFormData]=useState({
    content:"",
    name:"",
    profileurl:"",
    designation:""
  });
  const [images,setimages]=useState([]);
  const [imageUpload,setImageUpload]=useState(null);
  
  const checkimg=()=>{
    // console.log(imageUpload);
    if(imageUpload.size>200000){
      return false;
    }
    const fileExtension = imageUpload.name.split(".").at(-1);
    const allowedFileTypes = ["jpg", "png","gif","jpeg"];
    if (!allowedFileTypes.includes(fileExtension)) {
        return false;
    }  
    return true;
}

  const afterurl=async(url)=>{
    setFormData({
      ...FormData,
      profileurl: url
  })
    alert("Image was Succesfully Updated");
  }

  const handleChange = e => {
      const { name, value } = e.target
      setFormData({
          ...FormData,
          [name]: value
      })
    //   console.log(FormData)
  }
  async function submit() {
    try {
        // console.log(FormData)
      await axios.post("/testimonial/addtestimonial",FormData)
      .then(()=>{alert("Testimonials added successfully"); window.location.reload()})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  

  const changeimage=async ()=>{
    // console.log("change image");
    try{
    if(!checkimg()){
        alert("Please Upload Valid image on 200KB");
    }
    else if(imageUpload!==null){
        const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
        await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url)=>{
            // console.log(url); 
             afterurl(url);
          })
        }) 
    }
    else{
        console.log("nothing")
    }
   //  console.log(user);
      } catch (err) {
     console.error(err);
       }
    }

    useEffect(() => {
      // console.log("img change")
        changeimage();
    }, [imageUpload])


  return (
    <div>
        <div className="add-area add_event_area" id='add_event_area'>
            {/* html of Event to add */}        
           <p>Add new Testimonial</p>
           <div>
                <input type="text" id="" className='eventtitle' placeholder='Name'  onChange={ handleChange } name="name" value={FormData.name}/>
                <input type="text"  id="" placeholder='Designation'  onChange={ handleChange } name="designation" value={FormData.designation} />
                <textarea  id="" cols="30" rows="10"placeholder='Content'  onChange={ handleChange } name="content" value={FormData.content} required/>
                <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i className="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img"  accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />
                </div>
                <button onClick={()=>{submit()}} id='blog-txt-add' >Add</button>
                <button type="reset">Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddTestimonials
