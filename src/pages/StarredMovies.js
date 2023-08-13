import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import StarredMovieCard from "../components/StarredMovieCard";

function StarredMovies() {
  const { movies, starred } = useContext(DataContext);

  const showMovies = movies.filter(({ id }) => starred.includes(id));

  return (
    <div>
      <h1>Starred Movies</h1>
      <div className="movie-cards-div">
        {showMovies.map((movieData) => (
          <StarredMovieCard movieData={movieData} key={movieData.id} />
        ))}
      </div>
    </div>
  );
}

export default StarredMovies;
