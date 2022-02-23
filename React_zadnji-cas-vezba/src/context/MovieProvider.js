import React, { createContext, useState } from "react";

//  Na ovaj nacin smo napravili context
export const MovieContext = createContext();

const initialState = [
  {
    name: "Harry Potter",
    price: "700",
    id: 0,
  },
  {
    name: "Lotr",
    price: "900",
    id: 1,
  },
  {
    name: "Batman",
    price: "500",
    id: 2,
  },
];

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialState);

  return (
    // ovo smo dobili iz instance MovieContext na 4 liniji kada smo kreirali Context
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
