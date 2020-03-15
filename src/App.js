import React, { Fragment, useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import videoBackground from "./assets/bridgeinplace.mp4"
import webBackground from "./assets/bridgeinplace.webm";
import popcornIcon from "./assets/popcorn-icon.png"
import './App.scss';
import Search from './components/search/Search';
import axios from 'axios';
import Movie from './components/search/movie/Movie';

const App = () => {

const [searchValue, setSearchValue] = useState("");
const [movies, setMovies] = useState(null);
const [loading, setLoading] = useState(false);

const onSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    const res = await axios.get(`http://www.omdbapi.com/?apikey=8a7a307&s=${searchValue.toLowerCase()}`)
    setMovies(res.data.Search);
    setLoading(false);
    console.log(movies);
}


  return (
    <Router>
    <Fragment>
    <img src={popcornIcon} alt="icon" className="icon"/>
    <div className="bg-video">
    <video className="bg-video__content" autoPlay muted loop>
      <source src={videoBackground} type="video/mp4" />
      <source src={webBackground} type="video/webm" />
    </video>
    </div>

    <Switch>

    <Route exact path="/">
    <Search searchValue={searchValue} onSubmit={onSubmit} setSearchValue={setSearchValue} loading={loading} movies={movies} />
    </Route>
    <Route exact path="/:id" component={Movie} />
    </Switch>

    </Fragment>
    </Router>
  );
}

export default App;
