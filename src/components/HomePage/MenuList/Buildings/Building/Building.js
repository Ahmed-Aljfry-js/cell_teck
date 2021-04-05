import React from "react";

function Building(props) {
  return <button onClick={props.hideBuildings} className="building">{props.buildingName|| "OFFICES TOWER"}</button>;
}

export default Building;
