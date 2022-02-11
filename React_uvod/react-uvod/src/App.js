import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Counter from "./components/Counter";
import Counters from './components/Counters';
import NavBar from './components/NavBar';

// Funkcionalne komp. nemogu da imaju svoj state
// function App() {
class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ]
  }
  render() {
    return (
      <div className='moja-klasa'>
        {/* Iza viticastih zagrada = {2 + 2} */}
        {/* <Counter /> */}
        <NavBar totalCounters={this.state.counters.length} />
        <Counters />
      </div>
    );
  }
}


export default App;
