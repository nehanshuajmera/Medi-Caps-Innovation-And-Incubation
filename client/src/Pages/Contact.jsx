import React, { useEffect, useState } from 'react'
import './Contact.css';
import MainContactpage from './Contact/MainContactpage';

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
