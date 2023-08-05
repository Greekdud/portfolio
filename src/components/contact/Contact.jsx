import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_gv11sce",
      "template_qv43ef7",
      form.current,
      "e5B3jcU2Fq_xSml2l"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>adetonathompson@gmail.com</h5>
            <a href="http://mailto:adetonathompson@gmail.com">Send me a Mail</a>
          </article>

          <article className="contact__option">
            <GrLinkedin />
            <h4>LinkedIn</h4>
            <h5>Adetona Thompson</h5>
            <a href="http://linkedin.com/in/adetonathompson">Send me a Mail</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+2348139737118</h5>
            <a href="http://wa.me/+2348139737118">Send me a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
