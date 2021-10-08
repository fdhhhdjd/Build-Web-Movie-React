import React, { useContext, useState } from "react";
import "./movie.css";
import { FaStar } from "react-icons/fa";
import { MovieContext } from "../../../../Contexts/MovieContext";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const MovieMap = ({ poster_path, title, vote_average, overview }) => {
  const [star, setStar] = useState(["", "", "", "", ""]);
  const [rating, setRating] = useState("");
  const setVoices = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <>
      <div className="movie">
        <img src={IMGPATH + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>

          <span className={`tag ${setVoices(vote_average)}`}>
            {vote_average}
          </span>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        {star.map((stars, i) => {
          const countValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={rating}
                onClick={() => setRating(countValue)}
              />
              <FaStar
                size={20}
                className="star"
                color={countValue <= rating ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setRating(countValue)}
                onMouseLeave={() => setRating(rating)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};

export default MovieMap;
