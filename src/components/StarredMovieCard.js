import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

function StarredMovieCard({ movieData: { id, title, summary, imageURL } }) {
  const {
    starred,
    watchlisted,
    addMovieToStarred,
    addMovieToWatchListed,
    removeMovieFromStarred,
  } = useContext(DataContext);
  const isStarred = starred.includes(id);
  const isWatchlisted = watchlisted.includes(id);
  const navigate = useNavigate();

  return (
    <div
      key={id}
      className="movie-card"
      onClick={(e) => {
        navigate("/movie/" + id);
        e.stopPropagation();
      }}
    >
      <img src={imageURL} alt={title} className="movie-card-img" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <div className="movie-card-div-btns">
        <button
          onClick={() => {
            isStarred ? removeMovieFromStarred(id) : addMovieToStarred(id);
          }}
        >
          {isStarred ? "Unstar" : "Star"}
        </button>
        <button
          onClick={() => {
            addMovieToWatchListed(id);
          }}
        >
          {isWatchlisted ? "Added to Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default StarredMovieCard;
