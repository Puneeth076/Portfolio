import React from "react";
import "./Header.css";
import Typical from "react-typical";
import CTA from './CTA'
import ME from  "../../assets/Home/punee.jpg.png"
import Social from './Social/Social'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Puneeth Gowda</h1>
        <h5 className="text-light">
          {""}
          <Typical
            loop={Infinity}
            steps={[
              "Enthusiastic Dev❤️",
              1000,
              "Front End Developer💻",
              1000,
              "Back End Developer😍",
              1000,
              "Node js developer🤖",
              1000,
              "React/React Native developer😎",
              1000,
            ]}
          />
        </h5>
        <CTA />
        <Social />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down"><BsFillArrowDownCircleFill/></a>
      </div>
    </header>
  )
}

export default Header
