import React from "react";
import "./MiddleSection.css";

import plane from './plan.PNG';

function MiddleSection() {
  return (
    <div className="plate-middle-section">
      <img src={plane} alt="plate-img" className="middle-section-img"/>
    </div>
  );
}

export default MiddleSection;
