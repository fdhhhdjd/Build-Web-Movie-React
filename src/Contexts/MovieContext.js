import React, { useState, createContext, useEffect } from "react";
import { APIURL, SEARCHAPI } from "../API/Api";
export const MovieContext = createContext();
const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(10);

  //api
  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(true);
        setMovies(data.results);
      });
  }, []);
  const HandleCLicks = () => {
    setVisible((a) => a + 5);
  };
  //search
  const HandleOnSubmit = () => {
    fetch(SEARCHAPI + search)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(true);
        setMovies(data.results);
      });
    setSearch("");
    if (search.trim() === "") {
      return;
    }
  };
  //loading
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(loadingTimeout);
  }, [movies]);

  const MovieContextData = {
    movies,
    setSearch,
    search,
    setMovies,
    HandleOnSubmit,
    isLoading,
    setIsLoading,
    HandleCLicks,
    visible,
  };
  return (
    <MovieContext.Provider value={MovieContextData}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
