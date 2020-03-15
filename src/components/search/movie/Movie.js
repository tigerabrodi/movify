import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';
import Spinner from '../../layout/Spinner';
import "./Movie.scss"

const Movie = () => {
    let [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    let {id} = useParams();

    useEffect(() => {
            axios.get(`http://www.omdbapi.com/?apikey=8a7a307&i=${id}`).then(result => {
                setLoading(true)
                setMovie(result.data);
                setLoading(false);
            });
            console.log(movie);
    }, [!movie])

    

    return loading || !movie ? <Spinner /> : (
        <div className="movie">
            <img src={movie.Poster} alt="movie img" className="movie__image"/>
            <div className="movie__info-box">
                <h1 className="movie__title"> Title: {movie.Title} </h1>
                <h1 className="movie__year"> Year: {movie.Year} </h1>
                <h1 className="movie__rated">Rated: {movie.Rated} </h1>
                <h1 className="movie__runtime">Runtime: {movie.Runtime} </h1>
                <h1 className="movie__genre">Genre: {movie.Genre} </h1>
                <h1 className="movie__actors">Actors: {movie.Actors} </h1>
                <h1 className="movie__rating">Rating: {movie.imdbRating} </h1>
                <h1 className="movie__plot">Plot: {movie.Plot} </h1>
            </div>
        </div>
    );
}

export default Movie;
