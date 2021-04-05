import React from "react";
import "./BuildingThree.css";

import ResidentialTower from "./BuildingThree.png";
function BuildingThree(props) {
  return (
    <div onClick={props.glow} className="building-three">
      <img
        className={"building-three-img " + props.isShown}
        src={ResidentialTower}
        alt="Residential Tower"
      />
    </div>
  );
}

export default BuildingThree;
