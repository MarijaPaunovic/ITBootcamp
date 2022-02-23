import { useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import GameList from "./components/GameList";
import GameListWithoutReducer from "./components/GameListWithoutReducer";
import MyProjectsList from "./components/MyProjectsList";
import ProjectProvider from "./context/ProjectProvider";

const initialState = [
  {
    title: "Overwatch",
    id: 0,
  },
  {
    title: "CoD",
    id: 1,
  },
];

function App() {
  const [state, setState] = useState(initialState);

  const handleAddGame = (game) => {
    setState((prevState) => [prevState, game]);
  };

  return (
    <div className="App">
      <ProjectProvider>
        <GameList />
        <ChildComponent />
        <br />
        <br />
        <br />
        <GameListWithoutReducer
          state={state}
          setState={setState}
          handleAddGame={handleAddGame}
        />
        <MyProjectsList />
      </ProjectProvider>
    </div>
  );
}

export default App;
