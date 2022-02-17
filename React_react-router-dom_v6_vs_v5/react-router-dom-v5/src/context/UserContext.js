import React, { createContext, useReducer } from 'react';
import { UserReducer } from '../reducer/UserReducer';


export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [users, dispatch] = useReducer(UserReducer, []);
    return <UserContext.Provider value={{ users, dispatch }}>
        {children}
    </UserContext.Provider>
}