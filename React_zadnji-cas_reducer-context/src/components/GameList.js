import React, { useReducer } from "react";
import { GamesReducer } from "../reducer/GamesReducer";

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

// DISPATCH
/*
    {
      type: "",
      payload: {  },
    }

*/

const GameList = () => {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(GamesReducer, initialState);

  const handleAddNewGame = () => {
    dispatch({
      type: "ADD_GAME",
      payload: {
        title: "Binding of Isaac",
        id: 2,
      },
    });
  };

  const handleUpdateGameName = () => {
    dispatch({
      type: "UPDATE_GAME",
      payload: {
        title: "RDR",
        id: 1,
      },
    });
  };

  return (
    <div>
      Game list
      {state.map((game) => (
        <p key={game.id}>{game.title}</p>
      ))}
      <button onClick={handleAddNewGame}>Add new Game</button>
      <button onClick={handleUpdateGameName}>Update Game Name</button>
    </div>
  );
};

export default GameList;
