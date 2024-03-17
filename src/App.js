import "./App.css";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import FilterMovie from "./FilterMovie";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    const fecthMovies = async () => {
      const request = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ed092a4c0edef4725e5326c20541cc26&language=en-US&page=1");

      const response = await request.json();
      setMovies(response.results);
      setFilteredMovies(response.results);
    };
    fecthMovies();
  }, []);

  return (
    <div className="App">
      <FilterMovie setFilteredMovies={setFilteredMovies} activeGenre={activeGenre} setActiveGenre={setActiveGenre} movies={movies} />
      <AnimatePresence>
        <motion.div layout className="popular-movies">
          {filteredMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
