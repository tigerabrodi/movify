import React, { Fragment } from 'react';
import SearchForm from './search-form/SearchForm';
import Movies from './movies/Movies';

const Search = ({onSubmit, searchValue, setSearchValue, loading, movies}) => {
    return (
        <Fragment>
        <SearchForm onSubmit={onSubmit} searchValue={searchValue} setSearchValue={setSearchValue} />
        <Movies loading={loading} movies={movies} />
        </Fragment>
    );
}

export default Search;
