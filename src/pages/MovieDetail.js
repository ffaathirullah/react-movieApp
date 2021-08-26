import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const MovieDetail = (props) => {
  const { detailMovie } = props;
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <div class="container">
      <p>
        <strong>Judul : </strong>
        {detailMovie.Title}
      </p>
      <p>
        <strong>Tahun : </strong>
        {detailMovie.Year}
      </p>
      <p>
        <strong>Gambar : </strong>
        <img src={detailMovie.Poster} alt="movie"></img>
      </p>
      <button type="button" class="btn btn-primary" onClick={() => goBack()}>
        Back
      </button>
    </div>
  );
};

export default withRouter(MovieDetail);
