import React, { useEffect, useReducer } from 'react';
import ErrorMessage from '../components/ErrorMsg/ErrorMessage';
import Loading from '../components/Loading/Loading';
import MovieList from '../components/Movie/MovieList';
import Search from '../components/Search/Search';
import API from "../config/api";
import { apiKey } from "../config/apiKey";
import { initialState, reducer } from "../reducer";
import { SEARCH_MOVIES_REQUEST, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILED } from "../reducer/types";

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    const { movies, errorMessage, loading } = state;

    const handleMovieSearch = movie => {
        API.get(`?s=${movie}&${apiKey}`)
            .then(res => {
                // console.log(res.data);
                if (res.data.Response === "True") {
                    dispatch({
                        type: SEARCH_MOVIES_SUCCESS,
                        payload: res.data.Search,
                    })
                } else {
                    dispatch({
                        type: SEARCH_MOVIES_FAILED,
                        payload: res.data.Error
                    })
                }
            })
    }

    useEffect(() => {
        handleMovieSearch("batman");
    }, [])

    // export const initialState = {
    //     loading: true,
    //     movies: [],
    //     errorMessage: null
    // };

    return <div>
        <Search handleMovieSearch={handleMovieSearch} />
        {
            loading && !errorMessage ? (
                <Loading />
            ) : errorMessage ? (<ErrorMessage>{errorMessage}</ErrorMessage>) : (<MovieList movies={movies} />)
        }
    </div>
}

export default Home;