import React from 'react'
import { Link } from 'react-router-dom';

const NO_IMAGE_FOUND = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif";

const MoviesListItem = ({ movie }) => {
    return (
        <div key={movie.imdbID} className="movie-wrapper">
            <Link to={`/movieDetails/${movie.imdbID}`}>
                <img style={{ borderRadius: "10px 10px 0 0" }} src={movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster} alt="Movie Poster" />
                <h3 className='movie-title'>{movie.Title}</h3>
                <p className='movie-year'>{movie.Year}</p>
            </Link>
        </div>
    );
}

export default MoviesListItem;