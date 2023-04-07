import './App.css';
import Header from './Universal/Header';
import Footer from './Universal/Footer';
import Home from './Pages/Herosection';
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from './Pages/Contact';
import Article from './Pages/Article';
import Event from './Pages/Event';
import Offering from './Pages/Offering';
import About from './Pages/About';
import Singleeventpage from './SingleEvent/Singleeventpage';
import { useEffect } from 'react';

function App() {
  
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/contact' element={<Contact/> }/>
        <Route  path='/Offering' element={<Offering/> }/>
        <Route  path='/Article' element={<Article/> }/>
        <Route  path='/About' element={<About/> }/>
        <Route  path='/Event' element={<Event/> }/>
        <Route  path='/singleevent' element={<Singleeventpage/> }/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
