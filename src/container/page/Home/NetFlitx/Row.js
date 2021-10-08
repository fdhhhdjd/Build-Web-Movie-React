import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
// import MovieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import { REACT_APP_API } from "../../../../API/Api";
// import { REACT_APP_API } from "../../Api/APIbig";
const base_url = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow, index }) => {
  const [movies, setMovies] = useState([]);
  const [Trailer, setTrailer] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(REACT_APP_API + fetchUrl);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, []);
  const handleClick = (movie) => {
    // if (Trailer) {
    //   setTrailer("");
    // } else {
    //   MovieTrailer(movie?.name || "")
    //     .then((url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       setTrailer(urlParams.get("v"));
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
      {Trailer && <Youtube videoId={Trailer} opts={opts} />}
    </>
  );
};

export default Row;
