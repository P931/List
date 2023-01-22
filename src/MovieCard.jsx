import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="hedyear">
        <p className="year">{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400/400"
          }
          alt="movie"
        />
      </div>

      <div className="cardfotr">
        <span>{movie.Type}</span>
        <p>{movie.Title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
