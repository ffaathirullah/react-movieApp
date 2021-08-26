import React, { useEffect, useState } from "react";
import "../App.css";
import MovieList from "../components/MovieList";
import HeaderMovie from "../components/HeaderMovie";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const HomeMovie = (props) => {
  const { setdetailMovie } = props;
  const [movies, setMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${searchValue}`)
      .then((res) => {
        const movies = res.data.Search;
        if (movies) {
          setMovie(movies);
        }
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <HeaderMovie heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <div className="d-flex flex-row ">
          <MovieList movies={movies} setdetailMovie={setdetailMovie} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(HomeMovie);
