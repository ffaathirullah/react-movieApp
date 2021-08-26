import React, { useState } from "react";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const MovieList = (props) => {
  const { movies } = props;
  const { setdetailMovie } = props;
  const { DetailMovie } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDetail = (value) => {
    dispatch({ type: "DETAIL_MOVIE", payload: value });
    history.push(`/detail/${value.imdbID}`);
  };

  const mapStateToProps = (state) => ({
    todo: state.movies,
  });
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
