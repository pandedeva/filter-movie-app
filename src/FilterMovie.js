import React, { useEffect } from "react";

export default function FilterMovie({ setFilteredMovies, activeGenre, setActiveGenre, movies }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredMovies(movies);
      return;
    }
    const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(activeGenre));

    setFilteredMovies(filteredMovies);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <h1>Movie App</h1>
      <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>
        All
      </button>
      <button className={activeGenre === 12 ? "active" : ""} onClick={() => setActiveGenre(12)}>
        Comedy
      </button>
      <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>
        Action
      </button>
    </div>
  );
}
