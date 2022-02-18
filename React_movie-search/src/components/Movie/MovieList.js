import React from 'react';
import MoviesListItem from './MoviesListItem';
import "./movieList.css";


const MovieList = ({ movies }) => {

    return (<div className="movie-container">
        {movies.map(movie => (
            <MoviesListItem key={movie.imdbID} movie={movie} />
        ))
        }
    </div>);
}

export default MovieList;