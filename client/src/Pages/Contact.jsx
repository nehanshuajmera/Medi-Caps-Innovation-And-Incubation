import React, { useEffect, useState } from 'react'
import './Contact.css';
import MainContactpage from './Contact/MainContactpage';
import StartupFounder from './Contact/StartupFounder';
import Investor from './Contact/Investor';
import GeneralQuery from './Contact/GeneralQuery';
import IdeaOwner from './Contact/IdeaOwner';
import Student from './Contact/Student';
import Mentor from './Contact/Mentor';

export default function Contact() {
  const [section, setsection] = useState("");

  useEffect(() => {
    setsection("")
  }, [])

  return (
    <div >
      <MainContactpage setsection={setsection} />
    
    </div>
  )
}
