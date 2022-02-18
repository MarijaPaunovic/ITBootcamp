import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AppNavbar from './components/App/AppNavbar';
import MovieDetails from './components/Movie/MovieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/movieDetailes/:movieId' element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
