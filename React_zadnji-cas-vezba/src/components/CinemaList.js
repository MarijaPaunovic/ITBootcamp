import React, { useContext } from "react";
import { CinemaContext } from "../context/CinemaProvider";

const CinemaList = () => {
  const { cinema } = useContext(CinemaContext);
  return (
    <div style={{ color: "red" }}>
      Cinema LIst
      <br />
      {cinema.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  );
};

export default CinemaList;
