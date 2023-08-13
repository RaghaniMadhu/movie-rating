import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";

const getActiveStyle = ({ isActive }) => ({
  fontWeight: isActive ? "600" : "200",
  fontSize: isActive ? "x-large" : "",
});

export default function Header() {
  const { searchBar, setSearchBarValue } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        IMDB
      </h1>
      <input
        type="text"
        placeholder="Search movies by title, cast and director..."
        className="search-bar"
        value={searchBar}
        onChange={(e) => {
          setSearchBarValue(e.target.value);
        }}
      />
      <nav>
        <NavLink to="/" style={getActiveStyle} className="navlink">
          Home
        </NavLink>
        <NavLink to="/watchlisted" style={getActiveStyle} className="navlink">
          Watchlist
        </NavLink>
        <NavLink to="/starred" style={getActiveStyle} className="navlink">
          Starred Movies
        </NavLink>
      </nav>
    </div>
  );
}
