import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdow from "../Dropdown/Dropdow";
import Button from "../button/Button";
import firebase from "../../utils/firebaseConfig";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { UserContext } from "../../Contexts/Authcontext";
import ToggleTheme from "../Toggle/Toggle";
import Toggle from "../Toggle/Toggle";
const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    localStorage.removeItem("user");
    props.setUserState();
    setAnchorEl(null);
    firebase.auth().signOut();
  };
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const currentUser = useContext(UserContext);
  return (
    <div>
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <Link to="/" className="nav-links">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
              />
            </Link>
            <Link to="/" className="nav-links">
              <span>Homepage</span>
            </Link>
            <Link to="/series" className="nav-links">
              <span>Series</span>
            </Link>
            <Link to="/movies" className="nav-links">
              <span>Movies</span>
            </Link>
            <Link to="/my-list" className="nav-links">
              <span>My List</span>
            </Link>
            <Link to="/feedback" className="nav-links">
              <span>Feedback</span>
            </Link>

            <Toggle />
          </div>

          <div className="right">
            {currentUser && (
              <>
                <span>
                  {currentUser.displayName ||
                    currentUser.email.split("@gmail.com")}
                </span>
                <Notifications className="icon" />
                <img src={currentUser.photoURL} />
              </>
            )}
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span className="nav-links">Settings</span>
                <span className="nav-links" onClick={handleClose}>
                  Logout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
