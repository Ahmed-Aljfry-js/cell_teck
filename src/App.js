import React, { useState } from "react";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import FloorPage from "./components/FloorPage/FloorPage";
import PlatePage from "./components/PlatePage/PlatePage";

function App() {
  // Logic to show pages
  const [showHome, setShowHome] = useState("shown-home");
  const [showFloor, setShowFloor] = useState("hidden");
  const [showPlate, setShowPlate] = useState("hidden");

  function showFloorPage(e) {
    e.preventDefault();

    setShowHome("hidden");
    setShowPlate("hidden");

    setShowFloor("shown");
  }

  function showPlatePage(e) {
    e.preventDefault();

    setShowHome("hidden");
    setShowFloor("hidden");

    setShowPlate("shown");
  }

  function showHomePage(e) {
    e.preventDefault();

    setShowHome("shown-home");
    setShowFloor("hidden");

    setShowPlate("hidden");
  }
  return (
    <div className="App">
      <HomePage showFloorPage={showFloorPage} showHome={showHome} />
      <FloorPage
        showHomePage={showHomePage}
        showPlatePage={showPlatePage}
        showFloor={showFloor}
      />
      <PlatePage showFloorPage={showFloorPage} showPlate={showPlate} />

      <div className="sky"></div>
      <div className="ground"></div>
    </div>
  );
}

export default App;
