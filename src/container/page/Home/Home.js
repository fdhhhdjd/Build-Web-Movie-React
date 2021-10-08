import React from "react";
import "../../page/page.css";
import Feature from "./feature";
import Footer from "./footter/Footer";
import List from "./List";
import Watch from "./watch/Watch";
import Scroll from "../../Scroll/Scroll";
import "./list.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <Feature />
        <List />
        <Watch />
        <Scroll showBelow={650} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
