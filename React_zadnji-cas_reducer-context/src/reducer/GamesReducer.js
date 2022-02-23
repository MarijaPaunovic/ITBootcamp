/*
    action: {
        type: 'Switch key ',
        payload: id
        payload: {id, title...}
        payload: [...]
    }


*/

// action.payload = {
//     title: '',
//     id: '',
// }

// action.payload = 'Game Name'
// action.payload = 'Game Id'

export const GamesReducer = (state, action) => {
  console.log("in games reducer", action);

  switch (action.type) {
    case "ADD_GAME":
      return [
        ...state,
        {
          title: action.payload.title,
          id: action.payload.id,
        },
      ];

    // return [...state, action.payload]

    // return [...state, {
    //     title: action.payload,
    //     id: Math.random()*10
    // }]
    case "UPDATE_GAME":
      return [...state].map((game) =>
        game.id === action.payload.id
          ? { ...game, title: action.payload.title }
          : { ...game }
      );

    case "DELETE_GAME":
      return [...state].filter((game) => game.id !== action.payload);

    default:
      return state;
  }
};
