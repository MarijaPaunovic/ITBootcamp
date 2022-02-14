import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import CounterReducer from './components/CounterReducer';
import Navbar from './components/Navbar';
import BookContextReducer from './context/BookContext';
// import { BookReducer, useReducer } from "./reducer";

function App() {
  return (
    <div className="App">
      <CounterReducer />

      <BookContextReducer>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextReducer>
    </div>
  );
}

export default App;
