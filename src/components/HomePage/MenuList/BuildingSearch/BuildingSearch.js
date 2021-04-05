import React, { useState } from "react";
import "./BuildingSearch.css";

import Levels from "./Levels/Levels";

function BuildingSearch() {
  // Levels showing state
  const [showLevels, setShowLevels] = useState("hidden");

  // Showing and Hiding levels logic
  function toggleLevels(e) {
    e.preventDefault();

    if (showLevels === "hidden") {
      setShowLevels("shown");
    } else {
      setShowLevels("hidden");
    }
  }

  return (
    <div className="building-search">
      <button onClick={toggleLevels} className="search-result">
        RESIDENTIAL TOWER
      </button>
      <img
        onClick={toggleLevels}
        src="#"
        alt="icon"
        className="right-arrow-icon"
      />
      <Levels isShown={showLevels} />
    </div>
  );
}

export default BuildingSearch;
