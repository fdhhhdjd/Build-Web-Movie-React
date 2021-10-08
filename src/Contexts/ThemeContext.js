import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isFlag: true,
    dark: {
      background: "rgb(39,39,39)",
      color: "white",
    },
    light: {
      background: "rgb(240,240,240)",
      color: "black",
    },
  });
  const ToggleTheme = () => {
    setTheme({
      ...theme,
      isFlag: !theme.isFlag,
    });
  };
  const ThemeContextData = {
    theme,
    ToggleTheme,
  };
  return (
    <ThemeContext.Provider value={ThemeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
