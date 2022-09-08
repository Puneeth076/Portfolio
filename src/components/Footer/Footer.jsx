import React from "react";
import "./Footer.css";
import {BsFacebook} from 'react-icons/bs/index'
import {BsInstagram} from 'react-icons/bs/index'
import {BsGithub} from 'react-icons/bs/index'
import {BsTwitter} from 'react-icons/bs/index'
import {BsLinkedin} from 'react-icons/bs/index'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Puneeth Gowda :)</a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"> <BsFacebook/></a>
        <a href="https://instagram.com"><BsLinkedin/></a>
        <a href="https://twitter.com"><BsTwitter/></a>
        <a href="https://linkedin.com"><BsInstagram/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Puneeth. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
