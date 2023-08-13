import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import WatchlistedMovieCard from "../components/WatchlistedMovieCard";

function WatchlistedMovies() {
  const { movies, watchlisted } = useContext(DataContext);

  const showMovies = movies.filter(({ id }) => watchlisted.includes(id));

  return (
    <div>
      <h1>Starred Movies</h1>
      <div className="movie-cards-div">
        {showMovies.map((movieData) => (
          <WatchlistedMovieCard movieData={movieData} key={movieData.id} />
        ))}
      </div>
    </div>
  );
}

export default WatchlistedMovies;
