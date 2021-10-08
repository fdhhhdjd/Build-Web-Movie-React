import React, { useContext } from "react";
import { MovieContext } from "../../../../Contexts/MovieContext";
import "../Movie/movie.css";

const Seach = ({ isLoading }) => {
  const { setSearch, search, HandleOnSubmit } = useContext(MovieContext);
  const HandleChange = (e) => {
    setSearch(e.target.value);
  };
  const Handlesubmit = (e) => {
    e.preventDefault();
    HandleOnSubmit();
  };
  return (
    <div>
      <form onSubmit={Handlesubmit}>
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={search}
          onChange={HandleChange}
        />
      </form>
    </div>
  );
};

export default Seach;
