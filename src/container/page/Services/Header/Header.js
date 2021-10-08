import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="showcase">
        <div className="showcase-top"> </div>
        <div className="showcase-content">
          <h1>Movie,TV show and more</h1>
          <p>Watch anytime,anywhere at TaiHeoDev </p>
          <Link to="/movies" className="btn-header btn-xl">
            watch free to 30 day
            <i className="fa fa-chevron-right btn-icon"></i>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
