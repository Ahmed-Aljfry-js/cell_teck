import React from "react";
import Building from "./Building/Building";
import "./Buildings.css";

function Buildings(props) {
  return (
    <div className={`buildings ${props.isShown}`}>
      <Building hideBuildings={props.hideBuildings}/>
      <Building buildingName="RETAIL CENTER" hideBuildings={props.hideBuildings}/>
      <Building buildingName="RESIDENTIAL TOWER" hideBuildings={props.hideBuildings}/>
    </div>
  );
}

export default Buildings;
