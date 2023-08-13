import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import WatchlistedMovies from "./pages/WatchlistedMovies";
import StarredMovies from "./pages/StarredMovies";
import "./App.css";
import SingleMoviePage from "./pages/SingleMoviePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlisted" element={<WatchlistedMovies />} />
        <Route path="/starred" element={<StarredMovies />} />
        <Route path="/movie/:movieId" element={<SingleMoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
