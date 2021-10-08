import React, { useContext, useEffect, useState } from "react";
import Loading from "../../../Loading/Loading";
import { MovieContext } from "../../../../Contexts/MovieContext";
import "./movie.css";
import MovieMap from "./MovieMap";
import Seach from "../search/Search";
import Panigation from "../pev/Panigation";
import Scroll from "../../../Scroll/Scroll";

const Movies = () => {
  const { movies, isLoading, visible, HandleCLicks } = useContext(MovieContext);

  return (
    <>
      <Seach />
      {!isLoading ? (
        <div className="movie-container">
          {movies.slice(0, visible).map((movie) => (
            <MovieMap key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <button
        className="load-more"
        style={{
          cursor: visible === 20 && "not-allowed",
          background: visible === 20 && "#303847",
        }}
        onClick={HandleCLicks}
      >
        Load more
      </button>

      <Panigation />
      <Scroll showBelow={150} />
    </>
  );
};

export default Movies;
