import './App.css';
// import DeleteUsers from './components/DeleteUsers';
// import GetUsers from './components/GetUsers';
// import PostUsers from './components/PostUsers';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { Home, About, Users, UsersDetails } from './views';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      {/* <GetUsers /> */}
      {/* <PostUsers /> */}
      {/* <DeleteUsers /> */}

      <UserContextProvider>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/users/:id">
              <UsersDetails />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            {/* Mora da ide na kraju (ako je na pocetku uvek ce renderovati home) ili dodati kod svih > exact path="/" < */}
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
