import React from 'react';
import "./MovieItem.scss"
import { Link } from 'react-router-dom';
const MovieItem = ({movie: {Title, Poster, imdbID, Year}}) => {
    return (
        <Link to={`/${imdbID}`}>
        <div className="movie-item">
            <img src={Poster} alt="movie-item" className="movie-item__image" />
            <h3 className="movie-item__year"> {Year} </h3>
            <h1 className="movie-item__title">{Title} </h1>
        </div>
        </Link>
    );
}

export default MovieItem;
