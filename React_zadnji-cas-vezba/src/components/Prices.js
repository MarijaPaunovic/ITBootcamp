import React, { useContext, useEffect } from "react";
import { CinemaContext } from "../context/CinemaProvider";
import { MovieContext } from "../context/MovieProvider";

const Prices = () => {
  const { movies } = useContext(MovieContext);
  const { cinema } = useContext(CinemaContext);

  return (
    <div>
      Prices:
      {movies.map((movie) => (
        <p key={movie.id}>{movie.price}</p>
      ))}
      <br />
      {cinema.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  );
};

export default Prices;
