import React from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./feature.css";
import trailer from "../../../Images/trailer.mp4";
const feature = () => {
  return (
    <>
      <div className="featured">
        <section className="showcase">
          <header>
            <h2 className="logo">Travel</h2>
            <div className="toggle" />
          </header>
          <video src={trailer} muted loop autoPlay />
          <div className="overlay" />
          <div className="text">
            <h2 className="h2">Never Stop To </h2>
            <h3 className="h3">Exploring The World</h3>
            <p className="p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="a">
              Explore
            </a>
          </div>

          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100006139249437"
                target="_blank"
                className="aa"
              >
                <img src="https://i.ibb.co/x7P24fL/facebook.png" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tientai_heo" target="_blank">
                <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nguyentientai10/"
                target="_blank"
              >
                <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
              </a>
            </li>
          </ul>
        </section>
        <div className="info"></div>
      </div>
    </>
  );
};

export default feature;
