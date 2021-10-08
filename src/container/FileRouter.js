import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./page/Home/Home";
import Services from "./page/Services/Services";
import Contact from "./page/Contact/Contact";
import Products from "./page/Product/Products";
import ListMovie from "./page/ListMovie/ListMovie";
import Marketting from "./page/markeling/Marketting";
import Consuling from "./page/Consuling/Consuling";

const FIleRouter = ({ setUserState }) => {
  return (
    <Router>
      <Navbar setUserState={setUserState} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" component={Services} />
        <Route path="/movies" component={Products} />
        <Route path="/feedback" component={Contact} />
        <Route path="/my-list" component={ListMovie} />
        <Route path="/marketing" component={Marketting} />
        <Route path="/consulting" component={Consuling} />
      </Switch>
    </Router>
  );
};

export default FIleRouter;
