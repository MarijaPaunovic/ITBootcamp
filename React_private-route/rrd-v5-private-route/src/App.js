import './App.css';
// import DeleteUsers from './components/DeleteUsers';
// import GetUsers from './components/GetUsers';
// import PostUsers from './components/PostUsers';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { useState } from 'react';
// import { Home, About, Users, UsersDetails } from './views';
// import { UserContextProvider } from './context/UserContext';
import Profile from "./pages/Profile";
import Account from './pages/Account';
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [isAut, setIsAut] = useState();

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <button onClick={() => { setIsAut(true) }}>Login</button>
          <button onClick={() => { setIsAut(false) }}>Logout</button>
          <br />
          <Link to="/profile">Profile</Link>
          <br />
          <Link to="/account">Account</Link>
        </Route>
        <PrivateRoute path="/profile" component={Profile} isAut={isAut} />
      </Router>
    </div>
  );
}

export default App;
