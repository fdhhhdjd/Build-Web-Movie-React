import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import "./toggle.css";
const Toggle = () => {
  const { ToggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggle-btn">
      <button type="button" onClick={ToggleTheme} className="button">
        Toggle Theme
      </button>
    </div>
  );
};

export default Toggle;
