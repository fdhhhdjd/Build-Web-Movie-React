import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import firebase from "firebase";
const Button = () => {
  return (
    <Link to="sign-up">
      <button className="btn">Logout</button>
    </Link>
  );
};

export default Button;
