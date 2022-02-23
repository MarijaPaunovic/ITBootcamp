import React from "react";

const PricesWIthoutContext = ({ moviescopy }) => {
  return (
    <div>
      Prices without context
      {moviescopy.map((movie) => (
        <p key={movie.id}>{movie.price} </p>
      ))}
    </div>
  );
};

export default PricesWIthoutContext;
