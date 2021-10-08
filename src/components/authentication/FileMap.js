import React, { useState, useEffect, useContext } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Login from "./Login/Login";
import Signup from "./Login/SignUp";
// import Navbar from "../../container/Navbar/Navbar";
import Trailer from "../../Images/trailer.mp4";
import firebase from "../../utils/firebaseConfig";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../../components/authentication/Login/google.css";
import FIleRouter from "../../container/FileRouter";
import "../../App.css";
import { ThemeContext } from "../../Contexts/ThemeContext";
const LoginFile = () => {
  const [user, setUser] = useState(false);
  const [Toggle, setToggle] = useState(true);
  const formMode = () => {
    setToggle(!Toggle);
  };
  const userState = () => {
    const data = localStorage.getItem("user");
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  };
  useEffect(() => {
    userState();
  }, []);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      setUser: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // !! ensure boolean
      setUser(!!user);
      console.log(user);
    });
  }, []);
  const { theme } = useContext(ThemeContext);
  const { isFlag, light, dark } = theme;
  const style = isFlag ? dark : light;
  return (
    <div>
      {user ? (
        <div style={style}>
          <FIleRouter setUserState={() => setUser(null)} />
        </div>
      ) : (
        <div>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src={Trailer} type="video/mp4" />
          </video>
          {Toggle ? (
            <div>
              <Login
                toggle={() => formMode()}
                loggedIn={(user) => setUser(user)}
              />
              <div className="facebook">
                <h1 className="account">Login Account</h1>
                <div className="google">
                  <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>
              </div>
            </div>
          ) : (
            <Signup toggle={() => formMode()} />
          )}
        </div>
      )}
    </div>
  );
};

export default LoginFile;
