import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';



const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);

    const handleDelete = ({ book }) => {
        dispatch({
            type: "REMOVE_BOOK",
            payload: { id: book.id }
        })
    }

    return (
        <div>
            <h3>{book.title}</h3>
            <h5>{book.author}</h5>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BookDetails;