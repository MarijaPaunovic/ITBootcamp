import React, { useReducer } from "react";
import { GamesReducer } from "../reducer/GamesReducer";

const ChildComponent = () => {
  const { state } = useReducer(GamesReducer);
  return <div></div>;
};

export default ChildComponent;
