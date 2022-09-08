import React from 'react'
import './Social.css'
import {BsFacebook} from 'react-icons/bs/index'
import {BsInstagram} from 'react-icons/bs/index'
import {BsGithub} from 'react-icons/bs/index'
import {BsTwitter} from 'react-icons/bs/index'
import {BsLinkedin} from 'react-icons/bs/index'

const Social = () => {
  return (
    
      <div className="header__socials">
        <a href="http://facebook.com" target="_blank" ><BsFacebook /></a>
        <a href="http://github.com" target="_blank"><BsGithub /></a>
        <a href="http://instagram.com" target="_blank"><BsInstagram /></a>
        <a href="http://twitter.com" target="_blank"><BsTwitter /></a>
        <a href="http://linkedin.com" target="_blank"><BsLinkedin /></a>

      </div>
    
  )
}

export default Social
