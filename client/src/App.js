import './App.css';
import Header from './Universal/Header';
import Footer from './Universal/Footer';
import Home from './Pages/Home/Home';
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from './Pages/Contact/Contact';
import Article from './Pages/Article/Article';
// import Event from './Pages/Events/Event';
import Offering from './Pages/Offering/Offering';
import About from './Pages/About/About';
import Singleeventpage from './Pages/Events/SingleEvent/Singleeventpage';
import { useEffect, useState } from 'react';
import Upcomingeventpage from './Pages/Events/SingleEvent/Upcomingeventpage';
import GeneralQuery from './Pages/Contact/SingleContactPages/GeneralQuery';
import IdeaOwner from './Pages/Contact/SingleContactPages/IdeaOwner';
import Investor from './Pages/Contact/SingleContactPages/Investor';
import Mentor from './Pages/Contact/SingleContactPages/Mentor';
import StartupFounder from './Pages/Contact/SingleContactPages/StartupFounder';
import Student from './Pages/Contact/SingleContactPages/Student';
import DetailblogPage from './Pages/Article/DetailblogPage';
import Singlecontact from './Pages/Contact/Singlecontact';
import AdminPanel from './Admin/AdminPanel';
import Event from './Pages/Community/Event'
import axios from 'axios';

function App() {
  const[event,setevent]=useState([]);
  const[blog,setblog]=useState([]);
  
  const getevent=async ()=>{
    await axios.get("/event/allevents").then((res) =>{ setevent(res.data) }).catch((err)=>{console.log("Error",err)})
  }
  const getblog=async ()=>{
    await axios.get("blog/allblogs").then((res) =>{ setblog(res.data) }).catch((err)=>{console.log("Error",err)})
  }

  useEffect(() => {
    getevent();
    getblog();
  }, [])

  const { pathname } = useLocation();

  useEffect(() => {
    // console.log("Scroll done")
    // window.scrollTo(0, 0)
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className='scroller'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/contact' element={<Contact/> }/>
        <Route  path='/Offering' element={<Offering/> }/>
        <Route  path='/Article' element={<Article blog={blog}/> }/>
        <Route  path='/About' element={<About/> }/>
        {/* <Route  path='/Event' element={<Event/> }/> */}
        <Route  path='/singleevent/:id' element={<Singleeventpage/> }/>
        <Route  path='/upcomingevent/:id' element={<Upcomingeventpage/> }/>
        <Route  path='/generalquery' element={<GeneralQuery/> }/>
        <Route  path='/ideaowner' element={<IdeaOwner/> }/>
        <Route  path='/investor' element={<Investor/> }/>
        <Route  path='/mentor' element={<Mentor/> }/>
        <Route  path='/startupfounder' element={<StartupFounder/> }/>
        <Route  path='/studentform' element={<Student/> }/>
        <Route  path='/detailsblog/:id' element={<DetailblogPage /> }/>
        <Route  path='/singlecontact/:id' element={<Singlecontact/> }/>
        <Route  path='/mii-admin' element={<AdminPanel/> }/>
        <Route  path='/event' element={<Event event={event}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
