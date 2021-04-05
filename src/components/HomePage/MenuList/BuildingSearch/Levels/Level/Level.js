import React, { useState } from "react";
import "./Level.css";

import Types from "./Types/Types";

function Level({levelNum}) {
  // Types visibility control
  const [showTypes, setshowTypes] = useState("hidden");

  // Showing and Hiding types logic
  function toggleTypes(e) {
    e.preventDefault();

    if (showTypes === "hidden") {
      setshowTypes("shown");
    } else {
      setshowTypes("hidden");
    }
  }

  return (
    <div className="level-wrapper">
      <button onClick={toggleTypes} className="level">
        Level {levelNum || 1}
      </button>
      <img onClick={toggleTypes} src="#" alt="icon" className="level-icon" />
      <Types isShown={showTypes} />
    </div>
  );
}

export default Level;
