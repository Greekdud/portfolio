import React from "react";
import "./portfolio.css";
import MBF from "../../assets/mbf.jpg";
import zizi from "../../assets/zizi.jpg";
import pop from "../../assets/pop.jpg";
// import hoodie from "../../assets/hoodie.jpg";
import mee from "../../assets/mee.jpg";
import newproject from "../../assets/newproject.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={zizi} alt="" />
          </div>
          <h3>ZIZI-a Directory App</h3>
          <a
            href="https://64b58591a03fbc3b9f5d5822--prismatic-babka-cf8650.netlify.app/"
            className="btn btn-primary"
            target="_blank"
          >
            Check it Out
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={newproject} alt="" />
          </div>
          <h3>This is an Upcoming Project </h3>
          <a href="" className="btn btn-primary" target="_blank">
            Check it Out
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={mee} alt="" />
          </div>
          <h3>HOODINI- an ECommerce App</h3>
          <a
            href="https://64b6d90ddb7334145d82609e--lively-cheesecake-ec74ef.netlify.app/"
            className="btn btn-primary"
            target="_blank"
          >
            Check it Out
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={MBF} alt="" />
          </div>
          <h3>This is an ECommerce Website</h3>
          <a
            href="http://www.mybellefriend.com"
            className="btn btn-primary"
            target="_blank"
          >
            Check it Out
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pop} alt="" />
          </div>
          <h3>This is a Brand Website</h3>
          <a
            href="http://www.popjohngraphics.com"
            className="btn btn-primary"
            target="_blank"
          >
            Check it Out
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={newproject} alt="new project cover" />
          </div>
          <h3>This is an Upcoming Web App</h3>
          <a href="" className="btn btn-primary" target="_blank">
            Check it Out
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
