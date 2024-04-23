import { useState } from "react";
import sunImage from "../assets/images/Sun.svg";
import moonImage from "../assets/images/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    setIsDarkMode(e.target.checked);
    if(e.target.checked) {
      // document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
    else {
      // document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        // checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img
          src={isDarkMode ? moonImage : sunImage}
          alt={isDarkMode ? "Moon" : "Sun"}
          className={`${isDarkMode ? "moon" : "sun"}`}
          onClick={toggleDarkMode}
        />
      </label>
    </div>
  );
};

export default DarkMode;
