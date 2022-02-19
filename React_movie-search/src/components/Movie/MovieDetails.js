import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import API from "../../config/api";
import { apiKey } from "../../config/apiKey";
import "./movieDetails.css";

const NO_IMAGE_FOUND = "https://i.makeagif.com/media/11-04-2015/mfnzwt.gif";


const MovieDetails = () => {
    // AXIOS URL CALL
    // https://www.omdbapi.com/?i=${movieId}&${apiKey}
    // https://www.omdbapi.com/?i=tt0372784&apikey=1067a3f

    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        API.get(`?i=${movieId}&${apiKey}`)
            .then(res => {
                console.log(res.data);
                setMovie(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const navigate = useNavigate();

    const handleBackButton = e => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <>
            <button type='submit' className='back-btn' onClick={handleBackButton}> &#60; Back</button>
            <div className='detail-container'>
                <div className="poster">
                    <img src={movie.Poster === "N/A" ? NO_IMAGE_FOUND : movie.Poster} alt="Movie Poster" />
                </div>

                <div className="info">
                    <div className="field">
                        <div className="label">
                            <p className='title label-p'>{movie.Title}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p className='label-p'>{movie.Plot}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>Released:</span> {movie.Released}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>Runtime:</span> {movie.Runtime}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>Genre:</span> {movie.Genre}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>IMDB Rating:</span> {movie.imdbRating}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>Director(s):</span> {movie.Director}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>Actors:</span> {movie.Actors}</p>
                        </div>
                    </div>
                    <div className="field">
                        <div className="label">
                            <p><span className='label-s'>BoxOffice:</span> {movie.BoxOffice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetails;