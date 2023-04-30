import React, { useEffect, useState } from 'react'
import './Contact.css';
import MainContactpage from './Contact/MainContactpage';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
