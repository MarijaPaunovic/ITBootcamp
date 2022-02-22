import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Missions from './pages/missions/Missions';
import Rockets from './pages/rockets/Rockets';
import Launches from './pages/launches/Launches';
import LaunchDetails from './pages/launches/LaunchDetailes';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launchdetails/:id" element={<LaunchDetails />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <h1>404 - Wrong page!</h1>
            </main>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
