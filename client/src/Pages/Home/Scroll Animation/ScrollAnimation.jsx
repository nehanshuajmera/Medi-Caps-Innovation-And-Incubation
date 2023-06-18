import React ,{useRef,useEffect,useState} from 'react'
import "./scrollanimation.css"
import { useInView } from 'react-intersection-observer';

export default function ScrollAnimation() {
  // const [i1,isvisible ] = useInView();
  // const{ref : i2, inView : isvisible2}=useInView();

  const myref1 = useRef();
  const myref2 = useRef();
  const myref3 = useRef();
  const myref4 = useRef();
  const[isvisible1,setISvisible1] = useState(false);
  const[isvisible2,setISvisible2] = useState(false);
  const[isvisible3,setISvisible3] = useState(false);
  const[isvisible4,setISvisible4] = useState(false);

  useEffect(()=>{
    // console.log('myref',myref.current);
    const observer1 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible1(entry.isIntersecting);
        console.log("entry",entry);
      });
      
    })
    const observer2 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible2(entry.isIntersecting);
        console.log("entry",entry);
      });
      
    })
    const observer3 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible3(entry.isIntersecting);
        console.log("entry",entry);
      });
      
    })
    const observer4 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible4(entry.isIntersecting);
        console.log("entry",entry);
      })
    })
    observer1.observe(myref1.current);
    observer2.observe(myref2.current);
    observer3.observe(myref3.current);
    observer4.observe(myref4.current);
})
  return (
    <div className='scroll-animation-homepage'>
      <div className="scroll-animation-homepage-container"> 
        <div ref={myref1} className="scroll-animation-homepage-container-content">
          <h1>Ideate </h1>
          {/* <i className={`fa-solid fa-1 fa-9x  ${isvisibleOdd?'show-animation':'hide-animation'}`}/> */}
          <i className={`fa-solid fa-1 fa-9x hidden-i-animation ${isvisible1?'show-i-animation ':''}`}/>
          {/* <i className={`fa-solid fa-1 fa-9x `}/> */}
        </div>
        <div ref={myref2} className="scroll-animation-homepage-container-content">
          <h1>Innovate </h1>
          {/* <i className={`fa-solid fa-2 fa-9x  ${isvisibleEven?'show-animation':'hide-animation'}`}/> */}
          <i className={`fa-solid fa-2 fa-9x hidden-i-animation ${isvisible2?'show-i-animation ':''}`}/>
        </div>
        <div ref={myref3} className="scroll-animation-homepage-container-content">
          <h1>Incubate </h1>
          {/* <i className={`fa-solid fa-3 fa-9x  ${isvisibleOdd?'show-animation':'hide-animation'}`}/> */}
          <i className={`fa-solid fa-3 fa-9x hidden-i-animation ${isvisible3?'show-i-animation ':''}`}/>
          {/* <i classname="fa-solid fa-3 fa-9x hidden-i-animation"></i> */}
        </div>
        <div ref={myref4} className="scroll-animation-homepage-container-content">
          <h1>Accelerate </h1>
          {/* <i className={`fa-solid fa-4 fa-9x  ${isvisibleEven?'show-animation':'hide-animation'}`}/> */}
          <i className={`fa-solid fa-4 fa-9x hidden-i-animation ${isvisible4?'show-i-animation ':''}`}/>
          {/* <i classname="fa-solid fa-4 fa-9x hidden-i-animation"></i> */}
        </div>
      </div>
    </div>
    // <div className='scroll-animation-homepage'>
    //   <div className="scroll-animation-homepage-container"> 
    //     <div ref={i1} className="scroll-animation-homepage-container-content">
    //       <h1>Ideate ${isvisible?'Yes':''}</h1>
    //       <i className={`fa-solid fa-1 fa-9x hidden-i-animation ${isvisible?'show-i-animation':''}`}/>
    //     </div>
    //     <div ref={i2} className="scroll-animation-homepage-container-content">
    //       <h1>Innovate</h1>
    //       <i className={`fa-solid fa-2 fa-9x hidden-i-animation ${isvisible2?'show-i-animation':''}`}/>
    //     </div>
    //     <div className="scroll-animation-homepage-container-content">
    //       <h1>Incubate</h1>
    //       <i className="fa-solid fa-3 fa-9x hidden-i-animation"></i>
    //     </div>
    //     <div className="scroll-animation-homepage-container-content">
    //       <h1>Accelerate</h1>
    //       <i className="fa-solid fa-4 fa-9x hidden-i-animation"></i>
    //     </div>
    //   </div>
    // </div>
  )
}
