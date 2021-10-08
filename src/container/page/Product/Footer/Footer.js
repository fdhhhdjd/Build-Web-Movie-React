import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">
              <span>NetFlix</span>Movie
            </h1>
            <br />
            <br />
            <p>
              You can watch any movie on our website, if there is an error,
              please contact me, we will solve it promptly, thank you.
            </p>
            <div className="contacts">
              <span>
                <i className="fas fa-phone" /> &nbsp; 0798805741
              </span>
              <br />
              <span>
                <i className="fas fa-envelope" /> &nbsp;
                nguyentientai10@gmail.com
              </span>
              <br />
            </div>
            <div className="socials">
              <a
                href="https://www.facebook.com/profile.php?id=100006139249437"
                target="_blank"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                href="https://www.instagram.com/nguyentientai10/"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a href="https://twitter.com/tientai_heo" target="_blank">
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC0h2JqCkKRce819tSw27Y3w"
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <br />
            <br />
            <ul>
              <a href="#">
                <li>Events</li>
              </a>
              <a href="#">
                <li>Team</li>
              </a>
              <a href="#">
                <li>Mentores</li>
              </a>
              <a href="#">
                <li>Gallery</li>
              </a>
              <a href="#">
                <li>Terms and Conditions</li>
              </a>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact us</h2>
            <br />
            <div className="footer-section links">
              <ul>
                <a
                  href="https://www.facebook.com/profile.php?id=100006139249437"
                  target="_blank"
                >
                  <li>Facebook</li>
                </a>
                <a
                  href="https://www.instagram.com/nguyentientai10/"
                  target="_blank"
                >
                  <li>instagram</li>
                </a>
                <a href="https://twitter.com/tientai_heo" target="_blank">
                  <li>Twitter</li>
                </a>
                <a href="mailto:info@yoursite.com">
                  <li>Email</li>
                </a>
                <a href="tel://0798805741">
                  <li>Phone </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">Movie ||Tài Heo DevWeb|| NETFLIX</div>
      </div>
    </>
  );
};

export default Footer;
