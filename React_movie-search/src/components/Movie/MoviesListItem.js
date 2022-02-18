import React from 'react'

const NO_IMAGE_FOUND = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif";

const MoviesListItem = ({ movie }) => {
    return (
        <div key={movie.imdbID} className="movie-wrapper">
            <h3 className='movie-title'>{movie.Title}</h3>
            <img src={movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster} alt="Movie Poster" />
            <h4 className='movie-year'>{movie.Year}</h4>
        </div>
    );
}

export default MoviesListItem;