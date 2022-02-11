import './App.css';
import Counter from "./components/Counter";
import Counters from './components/Counters';


function App() {
  return (
    <div className='moja-klasa'>
      {/* Iza viticastih zagrada = {2 + 2} */}
      {/* <Counter /> */}
      <Counters />
    </div>
  );
}

export default App;
