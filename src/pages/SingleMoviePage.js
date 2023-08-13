import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

function SingleMoviePage() {
  const { movieId } = useParams();
  const {
    movies,
    starred,
    watchlisted,
    addMovieToStarred,
    addMovieToWatchListed,
  } = useContext(DataContext);
  const ourMovie = movies.find(({ id }) => id === parseInt(movieId));
  const isStarred = starred.includes(ourMovie.id);
  const isWatchlisted = watchlisted.includes(ourMovie.id);

  return (
    <div className="single-movie-card">
      <img
        src={ourMovie.imageURL}
        alt={ourMovie.title}
        className="single-movie-card-img"
      />
      <div className="single-movie-card-details">
        <h2>{ourMovie.title}</h2>
        <p>{ourMovie.summary}</p>
        <p>Year: {ourMovie.year}</p>
        <p>Genre: {ourMovie.genre}</p>
        <p>Rating: {ourMovie.rating}</p>
        <p>Director: {ourMovie.director}</p>
        <p>Writer: {ourMovie.writer}</p>
        <p>Cast: {ourMovie.cast.join(", ")}</p>
        <div className="single-movie-card-div">
          <button
            className="single-movie-card-div-btns"
            onClick={() => {
              addMovieToStarred(ourMovie.id);
            }}
          >
            {isStarred ? "Starred" : "Star"}
          </button>
          <button
            className="single-movie-card-div-btns"
            onClick={() => {
              addMovieToWatchListed(ourMovie.id);
            }}
          >
            {isWatchlisted ? "Added to Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleMoviePage;
