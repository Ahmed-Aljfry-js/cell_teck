import React from "react";
import "./BuildingOne.css";

import TowerOne from "./BuildingOne.png";

function BuildingOne(props) {



  return (
    <div onClick={props.glow} className={"building-one "}>
      <img  className={"building-one-img " + props.isShown} src={TowerOne} alt="My Building" />
    </div>
  );
}

export default BuildingOne;
