import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"></a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://wa.me/+2348139737118">
          <BsWhatsapp />
        </a>
        <a href="https://linkedin.com/in/adetona-thompson">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Greekdud/">
          <FaGithubSquare />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; ADETONA THOMPSON. ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  );
};

export default Footer;
