import React from "react";
import LoginFile from "./components/authentication/FileMap";
import { UserProvider } from "./Contexts/Authcontext";
import "./App.css";
import "./index.css";
import MovieContextProvider from "./Contexts/MovieContext";
import ThemeContextProvider from "./Contexts/ThemeContext";
const App = () => {
  return (
    <ThemeContextProvider>
      <MovieContextProvider>
        <UserProvider>
          <LoginFile />
        </UserProvider>
      </MovieContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
