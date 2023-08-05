import React from "react";
import "./header.css";
import CTA from "./CTA";
// import Me from "../../assets/me.jpeg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi! I'm</h5>
        <h1>Adetona Thompson</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />

        {/* <div className="me">
          <img src={Me} alt="me" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
