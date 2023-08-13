import React from "react";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import MovieCard from "../components/MovieCard";

function Home() {
  const { movies, searchBar } = useContext(DataContext);

  const showMovies =
    searchBar.length > 0
      ? movies.filter(
          ({ title, cast, director }) =>
            title.toLowerCase().includes(searchBar.toLowerCase()) ||
            director.toLowerCase().includes(searchBar.toLowerCase()) ||
            cast.join().toLowerCase().includes(searchBar.toLowerCase())
        )
      : movies;

  return (
    <div>
      <div className="home-movies-filters-div">
        <h1>Movies</h1>
        <p>Filters</p>
      </div>
      <div className="movie-cards-div">
        {showMovies.map((movieData) => (
          <MovieCard movieData={movieData} key={movieData.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
