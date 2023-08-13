import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import MovieCard from "../components/MovieCard";

function Home() {
  const { movies, searchBar } = useContext(DataContext);
  const [filterGenre, setFilterGenre] = useState(
    localStorage.getItem("filterGenre") ?? ""
  );
  const [filterRating, setFilterRating] = useState(
    localStorage.getItem("filterRating") ?? ""
  );
  const [filterYear, setFilterYear] = useState(
    localStorage.getItem("filterYear") ?? ""
  );

  const genreFilteredMovies =
    filterGenre.length > 0
      ? movies.filter(({ genre }) => genre.includes(filterGenre))
      : movies;

  const ratingFilteredMovies =
    filterRating.length > 0
      ? genreFilteredMovies.filter(
          ({ rating }) => rating === parseInt(filterRating)
        )
      : genreFilteredMovies;

  const yearFilteredMovies =
    filterYear.length > 0
      ? ratingFilteredMovies.filter(({ year }) => year === parseInt(filterYear))
      : ratingFilteredMovies;

  const showMovies =
    searchBar.length > 0
      ? yearFilteredMovies.filter(
          ({ title, cast, director }) =>
            title.toLowerCase().includes(searchBar.toLowerCase()) ||
            director.toLowerCase().includes(searchBar.toLowerCase()) ||
            cast.join().toLowerCase().includes(searchBar.toLowerCase())
        )
      : yearFilteredMovies;

  return (
    <div>
      <div className="home-movies-filters-div">
        <h1>Movies</h1>
        <select
          name="genre"
          value={filterGenre}
          onChange={(e) => {
            setFilterGenre(e.target.value);
            localStorage.setItem("filterGenre", e.target.value);
          }}
        >
          <option value="">All Genre</option>
          <option value="Action">Action</option>
          <option value="Crime">Crime</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Biography">Biography</option>
        </select>
        <select
          name="rating"
          value={filterRating}
          onChange={(e) => {
            setFilterRating(e.target.value);
            localStorage.setItem("filterRating", e.target.value);
          }}
        >
          <option value="">All Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <select
          name="year"
          value={filterYear}
          onChange={(e) => {
            setFilterYear(e.target.value);
            localStorage.setItem("filterYear", e.target.value);
          }}
        >
          <option value="">All Years</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
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
