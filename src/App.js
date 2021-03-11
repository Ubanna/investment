import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import axios from 'axios';


function App() {

  return (
    <>
       <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
    </>
  );
}

export default App;
