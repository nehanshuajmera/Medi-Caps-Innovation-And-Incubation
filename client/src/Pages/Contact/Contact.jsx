import React, { useEffect, useState } from 'react'
import './Contact.css';
import MainContactpage from './SingleContactPages/MainContactpage';

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
