import React, { useState } from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

const MovieList = (props) => {
  const { movies } = props;
  const { setdetailMovie } = props;
  const history = useHistory();

  const handleDetail = (value) => {
    setdetailMovie(value);
    history.push(`/detail/${value.imdbID}`);
  };
  return (
    <>
      {movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3">
          <img
            src={movie.Poster}
            alt="movie"
            onClick={() => handleDetail(movie)}
          ></img>
        </div>
      ))}
    </>
  );
};

export default withRouter(MovieList);
