import React, { useEffect, useState } from "react";
import "../App.css";
import MovieList from "../components/MovieList";
import HeaderMovie from "../components/HeaderMovie";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import { useSelector, useDispatch } from "react-redux";

const HomeMovie = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const { moviess } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("state global :", moviess);
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 3000);

    axios
      .get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${searchValue}`)
      .then((res) => {
        const movies = res.data.Search;
        if (movies) {
          dispatch({ type: "GET_USERS_MOVIE", payload: movies });
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
          <MovieList movies={moviess} />
        </div>
      </div>
    </div>
  );
};

export default HomeMovie;
