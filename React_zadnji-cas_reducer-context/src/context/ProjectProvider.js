import React, { createContext, useReducer } from "react";
import { ProjectReducer } from "../reducer/ProjectsReducer";

export const ProjectContext = createContext();

const initialState = [
  {
    title: "Chat App",
    id: 0,
  },
];

const ProjectProvider = ({ children }) => {
  const [projects, dispatch] = useReducer(ProjectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
