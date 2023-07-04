import React ,{useRef,useEffect,useState} from 'react'
import "./scrollanimation.css"
// import { useInView } from 'react-intersection-observer';

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

  const apperOptions = {
    // threshold : 1,
    rootMargin : "0px 0px -100px 0px"
  };
  useEffect(()=>{
    // console.log('myref',myref.current);
    const observer1 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible1(entry.isIntersecting);
        console.log("entry",entry);
      });
      
    },apperOptions)

    const observer2 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible2(entry.isIntersecting);
        console.log("entry",entry);
      });
      
    },apperOptions)

    const observer3 = new IntersectionObserver((entries)=>{
      // const entry =entries[0];
      // console.log('entry', entry);
      entries.forEach((entry)=>{
        setISvisible3(entry.isIntersecting);
        console.log("entry",entry);
      });
      
    },apperOptions)

    const observer4 = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        setISvisible4(entry.isIntersecting);
        console.log("entry",entry);
      })
    },apperOptions)

    observer1.observe(myref1.current);
    observer2.observe(myref2.current);
    observer3.observe(myref3.current);
    observer4.observe(myref4.current);
   
})
 // X
 const [x, setX] = useState();

 // Y
 const [y, setY] = useState();

 // This function calculate X and Y
 const getPosition = (Ref) => {
   const x = Ref.current.offsetLeft;
   setX(x);

   const y = Ref.current.offsetTop;
   setY(y);
 };
   useEffect(()=>{
     window.addEventListener("scroll",getPosition(myref2));
     // console.log(myref2.current.getBoundingClientRect().top); 
     // var position = document.documentElement
     // console.log("from top: " , myref2.current.offsetTop);
   })

  return (
    <div className='scroll-animation-homepage'>
      <div className="scroll-animation-homepage-left">
        <div className="scroll-animation-homepage-container"> 
          <div ref={myref1} className="scroll-animation-homepage-container-content">
            <h1>Ideate </h1>
          </div>
          <div ref={myref2} className="scroll-animation-homepage-container-content">
            <h1>Innovate </h1>
          </div>
          <div ref={myref3} className="scroll-animation-homepage-container-content">
            <h1>Incubate </h1>
          </div>
          <div ref={myref4} className="scroll-animation-homepage-container-content">
            <h1>Accelerate </h1>
          </div>
        </div>
      </div>     
      <div className="scroll-animation-homepage-right">
        <i className={`fa-solid fa-1 fa-9x hidden-i-animation ${isvisible1?'show-i-animation ':''}`}/>
        <i className={`fa-solid fa-2 fa-9x hidden-i-animation ${isvisible2?'show-i-animation ':''}`}/>
        <i className={`fa-solid fa-3 fa-9x hidden-i-animation ${isvisible3?'show-i-animation ':''}`}/> 
        <i className={`fa-solid fa-4 fa-9x hidden-i-animation ${isvisible4?'show-i-animation ':''}`}/>
      </div>
    </div>
  )
}
