import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp} from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from "@emailjs/browser"

const Conatct = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gz3mw4d', 'template_20uo78k', form.current, 'Jb5YBZbWHVz0Civ51')
      
    e.target.reset()
  };





  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icons"/>
            <h4>Email</h4>
            <h5>puneethgowda078@gmail.com</h5>
            <a href="mailto:puneethgowda078@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icons"/>
            <h4>Messenger</h4>
            <h5>puneethgowda</h5>
            <a href="https://m.me/puneethgowda" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icons"/>
            <h4>WhatsApp</h4>
            <h5>+91 9972118787</h5>
            <a href="https://api.whatsapp.com/send?phone=+91 9972118787" target='_blank'>Send a chat</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn-primary" value="Send">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Conatct;
