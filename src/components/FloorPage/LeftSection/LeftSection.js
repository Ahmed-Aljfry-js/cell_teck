import React from "react";
import "./LeftSection.css";

import plane from './plant.PNG';
function LeftSection({showPlatePage}) {
  return (
    <div className="left-section">
      <img src={plane} alt="floor-plate" />
      <div onClick={showPlatePage} className="floor-nav"></div>
      <div onClick={showPlatePage} className="floor-nav"></div>
      <div onClick={showPlatePage} className="floor-nav"></div>
      <div onClick={showPlatePage} className="floor-nav"></div>
    </div>
  );
}

export default LeftSection;
