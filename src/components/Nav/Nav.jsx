import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import{AiOutlineUser} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ri"
import {BsMessenger} from "react-icons/bs"
import {GiSecretBook} from "react-icons/gi"
import {useState } from 'react'

const Nav = () => {
  const [activeNav, stActiveNav] = useState('')
  return (
    <nav className='nac'>
    
      <a href="#"  onClick={() => stActiveNav('#')} className={activeNav === "#" ? 'active': ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => stActiveNav('#about')} className={activeNav === "#about" ? 'active': ''}> <AiOutlineUser/> </a>
      <a href="#experiance" onClick={() => stActiveNav('#experience')} className={activeNav === "#experience" ? 'active': ''}> <GiSecretBook/> </a>
      <a href="#services" onClick={() => stActiveNav('#services')} className={activeNav === "#services" ? 'active': ''}> <RiServiceLine/> </a>
      <a href="#contact" onClick={() => stActiveNav('#contact')} className={activeNav === "#contact" ? 'active': ''}> <BsMessenger/> </a>
      
    </nav>
  )
}

export default Nav
