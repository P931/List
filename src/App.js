import "./App.css";
// import Person from "./Person";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./MovieCard";

// 94854021
// c032e2d7

const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";

const App = () => {
  const [Movies, setMovies] = useState([]);
  const [Userint, setUserint] = useState("");

  const searchApi = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);

    const data = await res.json();

    // console.log(data.Search);
    setMovies(data.Search);
  };

  const handleClick = () => {
    setMovies({ Userint });
    searchApi(Userint);
    console.log("Userint is :- ", Userint);
  };

  useEffect(() => {
    setUserint("");
  }, []);

  return (
    <div className="main">
      <h1 className="header">Movieland</h1>

      <div className="int">
        <input
          className="inp"
          type="text"
          placeholder="Enter movie name"
          value={Userint}
          onChange={(e) => setUserint(e.target.value)}
        />

        <SearchIcon
          className="search"
          onClick={() => {
            handleClick();
          }}
        />
      </div>

      {Movies && Movies?.length > 0 ? (
        <div className="mcontainer">
          {Movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <h1 className="nomovie">{"Movies not found"}</h1>
      )}
    </div>
  );
};

export default App;
