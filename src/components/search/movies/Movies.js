import React, { Fragment } from 'react';
import "./Movies.scss"
import Spinner from '../../layout/Spinner';
import MovieItem from './MovieItem';



const Movies = ({loading, movies}) => {
    return loading ? <Spinner /> :
    <Fragment>
    {movies && 
        (<Fragment>
                 <div className="movies">
            {movies.map(movie => (
                <MovieItem movie={movie} key={movie.imdbID} />
            ))}   
                    </div> 
            </Fragment>
        )}

 
    </Fragment> 
}

export default Movies;
