import React, { createContext, useReducer } from 'react';
import { BookReducer } from '../reducer';

export const BookContext = createContext();

// useReducer(reducer, initialState)

const BookContextReducer = ({ children }) => {
    const [books, dispatch] = useReducer(BookReducer, [
        { id: 0, title: "Na Drini Cuprija", author: "Ivo Andric" }
    ]);
    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextReducer;