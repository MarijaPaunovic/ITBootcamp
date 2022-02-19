import React, { useState } from 'react';
import "./search.css";

const Search = ({ handleMovieSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = e => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleMovieSearch(searchValue);
        setSearchValue("");
    }

    return (
        <form className='search_form' onSubmit={handleSubmit}>
            <input type="search" value={searchValue} className='search_input' onChange={handleChange} placeholder="Search for movie..." />
        </form>
    );
}

export default Search;