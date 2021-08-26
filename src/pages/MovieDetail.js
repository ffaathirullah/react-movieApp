import React from "react";

const MovieDetail = (props) => {
  const { detailMovie } = props;
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
      <button type="button" class="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

export default MovieDetail;
