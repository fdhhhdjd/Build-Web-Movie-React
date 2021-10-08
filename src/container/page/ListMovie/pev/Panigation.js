import React, { useContext, useState } from "react";
import { MovieContext } from "../../../../Contexts/MovieContext";
import { APIURL } from "../../../../API/Api";
import "./pev.css";
const Panigation = () => {
  const { setMovies, setIsLoading } = useContext(MovieContext);
  const [currentPage, setCurrentPage] = useState(1);
  const Handleprefault = (e) => {
    fetch(APIURL + currentPage)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(true);
        if (e === "next") {
          setCurrentPage(currentPage + 1);
        } else if (e === "previous" && currentPage !== 1) {
          setCurrentPage(currentPage - 1);
        }
      });
  };
  return (
    <div class="pev">
      <div className="container">
        <button
          className="oke"
          style={{
            cursor: currentPage !== 1 ? "pointer" : "not-allowed",
            background: currentPage !== 1 ? "#32de57" : "#303847",
          }}
          onClick={() => Handleprefault("previous")}
        >
          Prev Page
        </button>
        <button onClick={() => Handleprefault("next")} className="oke">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Panigation;
