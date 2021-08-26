import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const MovieDetail = (props) => {
  const { DetailMovie } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <div class="container">
      <p>
        <strong>Judul : </strong>
        {DetailMovie.Title}
      </p>
      <p>
        <strong>Tahun : </strong>
        {DetailMovie.Year}
      </p>
      <p>
        <strong>Gambar : </strong>
        <img src={DetailMovie.Poster} alt="movie"></img>
      </p>
      <button type="button" class="btn btn-primary" onClick={() => goBack()}>
        Back
      </button>
    </div>
  );
};

// export default connect(),withRouter(MovieDetail);
export default withRouter(MovieDetail);
