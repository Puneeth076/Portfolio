import React from "react";
import "./Experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What skills i have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div></div>
              <h4>REACT JS</h4>
              <small className="text-light">Intermediate❤️</small>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>NODE JS</h4>
                <small className="text-light">Intermediate❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Intermediate❤️</small>
              </div>
            </article>

            <article className="skills__details">
              <BsPatchCheckFill className='skills__details-icons' />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Intermediate❤️</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
