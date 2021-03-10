import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
  return (
    <>
       <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
