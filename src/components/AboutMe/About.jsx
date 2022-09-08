import "./About.css";
import React from "react";
import Me from "../../assets/Home/puni.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Skills</h5>
              <small>
                <ul>
                  <li>c, c++</li>
                  <li>java</li>
                  <li>Html,Css,Javascript</li>
                  <li>React js</li>
                  <li>Angulr Ts</li>
                </ul>
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Experience</h5>
              <small>I'm fresher</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>Around 20+ projects completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            maxime debitis et alias esse sint fugiat reiciendis consectetur,
            quaerat soluta accusamus fuga? Ad rem sint hic atque inventore minus
            cum!
          </p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
