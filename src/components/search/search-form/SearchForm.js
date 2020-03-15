import React from 'react';
import axios from "axios"
import "./SearchForm.scss"

const SearchForm = ({onSubmit, searchValue, setSearchValue}) => {



    return (
        <div className="search-form">
            <h1 className="search-form__title">Search For A Movie You Are Interested In!</h1>
                <form onSubmit={e => onSubmit(e)} className="search-form__wrapper">
                    <input type="text" placeholder="Search For Any Movies . ." onChange={e => setSearchValue(e.target.value)} value={searchValue} className="search-form__input" required/>
                    <button className="search-form__button" type="submit"> <i className="fas fa-search search-form__icon" /> </button>
                </form>
        </div>
    );
}

export default SearchForm;
