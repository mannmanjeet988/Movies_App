import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchMovie } from "../../redux/actions";

const MovieInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //  const movieToBeDisplayed = useSelector(state=>state.movie.movieToShow[0])
  const movieToBeDisplayed = useSelector((state) => state.movie.movieToShow);
  const allMovies = useSelector((state) => state.movie.movies);

  console.log(movieToBeDisplayed);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="search-bar">
        <input
          placeholder="Search for movie-detail by title"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button onClick={() => dispatch(searchMovie(searchTerm))}>
          Search
        </button>
      </div>
      <div className="movie-list">
        {allMovies.map((movie) => (
          <h2>{movie.title}</h2>
        ))}
      </div>
      {movieToBeDisplayed && (
        <div className="movie-display">
          {movieToBeDisplayed.map((movie) => (
            <>
              <h1 className="info">Movie info</h1>
              <h2>Title: {movie.title}</h2>
              <h2>Year: {movie.year}</h2>
              <h2>Runtime: {movie.runtime} minutes</h2>
              <h2>Genre: {movie.genre}</h2>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
