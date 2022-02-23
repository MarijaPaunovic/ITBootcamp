import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./private/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>

          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
