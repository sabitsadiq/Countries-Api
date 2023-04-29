import React from "react";
import { useState, useEffect } from "react";
function Navbar() {
  const [darkMode, setDarkMode] = useState("light");
  const handleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      return <div className="darkMode"></div>;
    } else {
      setDarkMode("light");
    }
  };
  useEffect(() => {
    document.body.className = darkMode;
  }, [darkMode]);
  return (
    <div className={`navbar ${darkMode}`}>
      <div className="navbar-text">
        <p>Where is the world?</p>
        <div onClick={handleMode}>
          <p>dark mode</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
