import React, { Children, createContext, useState } from "react";

export const CinemaContext = createContext();

const initialState = [
  {
    name: "Cineplex",
    id: 1,
  },
  {
    name: "Vilin Grad",
    id: 2,
  },
];

const CinemaProvider = ({ children }) => {
  const [cinema, setCinema] = useState(initialState);
  return (
    <div>
      <CinemaContext.Provider value={{ cinema }}>
        Movies
        {children}
      </CinemaContext.Provider>
    </div>
  );
};

export default CinemaProvider;
