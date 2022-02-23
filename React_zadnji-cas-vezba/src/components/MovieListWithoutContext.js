import React from "react";

const MovieListWithoutContext = ({ moviescopy }) => {
  return (
    <div>
      Movie copy
      {moviescopy.map((movie) => (
        <div key={movie.id}>{movie.name} </div>
      ))}
    </div>
  );
};

export default MovieListWithoutContext;
