// TODO: Add the effect toggling the cover
// TODO: Complete the buildings

import React from "react";
import "./GlowingBuildings.css";

import BuildingOne from "./BuildingOne/BuildingOne";
import BuildingTwo from "./BuildingTwo/BuildingTwo";
import BuildingThree from "./BuildingThree/BuildingThree";

function GlowingBuildings(props) {
  return (
    <div className={"glowing-buildings " + props.isGlowingBuildingHidden}>
      
      <BuildingOne
        isShown={props.isBuildingOneShown}
        glow={props.toggleBuildingOne}
      />

      <BuildingTwo
        glow={props.toggleBuildingTwo}
        isShown={props.isBuildingTwoShown}
      />

      <BuildingThree
        glow={props.toggleBuildingThree}
        isShown={props.isBuildingThreeShown}
      />

    </div>
  );
}

export default GlowingBuildings;
