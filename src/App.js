import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
