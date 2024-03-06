import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import './addbanner.css'
export default function AddBanner() {
    const [imaguploadsuccessfully, setimaguploadsuccessfully] = useState(false);

    const [FormData,setFormData]=useState({
      image:"",
    });
    const [images,setimages]=useState([]);
    const [imageUpload,setImageUpload]=useState(null);
    
    const checkimg=()=>{
      const fileExtension = imageUpload.name.split(".").at(-1);
      const allowedFileTypes = ["jpg", "png","gif","jpeg"];
      if (!allowedFileTypes.includes(fileExtension)) {
        alert("File is Not a image")
          return false;
      }  
      return true;
  }
  
    const afterurl=async(url)=>{
      setFormData({
        ...FormData,
        image: url
    })
      alert("Image was Succesfully Updated");
      setimaguploadsuccessfully(true);
    }
  
    const handleChange = e => {
        const { name, value } = e.target
        setFormData({
            ...FormData,
            [name]: value
        })
    }
    async function submit() {
      try {
        if(!imaguploadsuccessfully){
          alert("IMAGE was not uploaded");
          return ;
        }
        await axios.post("/event/eventbanar/addbanar",FormData)
        .then(()=>{alert("Banner added successfully"); 
        window.location.reload()
     })
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
        <div className='event-banner'>
            <img src={FormData?.image} alt='' style={{margin:"40px",width:"220px",height:"220px"}}/>
            <div className="img-upload">
                <p>Upload image :</p>
                <label htmlFor="event-img">
                    <i className="fa-solid fa-upload" />
                </label>
                <input type="file" name="event-img" accept="image/png, image/gif, image/jpeg" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
            </div>
            <button onClick={() => { submit() }} id='blog-txt-add' >Add</button>

        </div>
    )
}
