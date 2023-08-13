import { createContext, useState } from "react";
import { moviesData } from "../db/Data";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [movies] = useState(moviesData);
  const [starred, setStarred] = useState(
    localStorage.getItem("starred")
      ? [
          ...localStorage
            .getItem("starred")
            .split(",")
            .map((eachId) => parseInt(eachId)),
        ]
      : []
  );
  const [watchlisted, setWatchlisted] = useState(
    localStorage.getItem("watchlisted")
      ? [
          ...localStorage
            .getItem("watchlisted")
            .split(",")
            .map((eachId) => parseInt(eachId)),
        ]
      : []
  );
  const [searchBar, setSearchBar] = useState(
    localStorage.getItem("searchbar") ?? ""
  );

  const addMovieToStarred = (id) => {
    if (starred.includes(id)) {
      return;
    } else {
      const modifiedStarred = [...starred, id];
      setStarred(modifiedStarred);
      localStorage.setItem("starred", modifiedStarred);
    }
  };

  const removeMovieFromStarred = (id) => {
    const modifiedStarred = starred.filter((starredIds) => starredIds !== id);
    setStarred(modifiedStarred);
    localStorage.setItem("starred", modifiedStarred);
  };

  const addMovieToWatchListed = (id) => {
    if (watchlisted.includes(id)) {
      return;
    } else {
      const modifiedWatchlist = [...watchlisted, id];
      setWatchlisted(modifiedWatchlist);
      localStorage.setItem("watchlisted", modifiedWatchlist);
    }
  };

  const removeMovieFromWatchlist = (id) => {
    const modifiedWatchlist = watchlisted.filter(
      (watchlistedIds) => watchlistedIds !== id
    );
    setWatchlisted(modifiedWatchlist);
    localStorage.setItem("watchlisted", modifiedWatchlist);
  };

  const setSearchBarValue = (val) => {
    setSearchBar(val);
    localStorage.setItem("searchbar", val);
  };

  return (
    <DataContext.Provider
      value={{
        movies,
        starred,
        watchlisted,
        addMovieToStarred,
        addMovieToWatchListed,
        searchBar,
        setSearchBarValue,
        removeMovieFromStarred,
        removeMovieFromWatchlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
