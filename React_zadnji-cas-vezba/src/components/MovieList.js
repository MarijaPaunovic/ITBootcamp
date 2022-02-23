import React, { Children, useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const MovieList = () => {
  //   const value = useContext(MovieContext);
  //   console.log(value);
  //   console.log(value.movies);

  const { movies, setMovies } = useContext(MovieContext);

  const handleAddMovie = () => {
    setMovies((prevState) => [
      ...prevState,
      {
        name: "Spiderman",
        price: 800,
        id: 4,
      },
    ]);
  };

  return (
    <div>
      Movie List
      <br />
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.name} and price is {movie.price} RSD
        </div>
      ))}
      <button onClick={handleAddMovie}>Add new movie</button>
    </div>
  );
};

export default MovieList;
