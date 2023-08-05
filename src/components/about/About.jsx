import React from "react";
import "./about.css";
import Me from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Want to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Problem Solving Skills</h5>
              <small>95% </small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Communication Skills</h5>
              <small>96%</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Team-Player</h5>
              <small>100%</small>
            </article>
          </div>
          <p>
            A Detail-Oriented and highly Organized FrontEnd Engineer with an eye
            for Responsive and Appealing User Interfaces,From CMS to
            Frameworks,I have proven experiences in Web development.I have great
            communication skills and a strong problem solving skill,And as a
            Team player,When one person in the team wins,the whole team wins.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
