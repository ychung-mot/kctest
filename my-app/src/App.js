import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default App;
