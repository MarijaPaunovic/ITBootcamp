import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Home, About, Users, UserDetails } from './views';
import { UserContextProvider } from './context/UserContext';
import { Navbar } from "./styled"

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <div>
            <Navbar>
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
            </Navbar>
            <Routes>
              <Route path='/about' element={<About />} />
              <Route path='/users' element={<Users />} />
              <Route path='/users/:id' element={<UserDetails />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </UserContextProvider>
      {/* <button>Primary</button>
      <button>Secondary</button> */}
    </div>
  );
}

export default App;
