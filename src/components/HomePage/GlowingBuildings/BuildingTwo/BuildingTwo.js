import React from "react";
import "./BuildingTwo.css";

import TowerTwo from "./BuildingTwo.png";

function BuildingTwo(props) {
  return (
    <div onClick={props.glow} className="building-two">
      <img  className={"building-two-img " + props.isShown} src={TowerTwo} alt="Retail Center" />
    </div>
  );
}

export default BuildingTwo;
