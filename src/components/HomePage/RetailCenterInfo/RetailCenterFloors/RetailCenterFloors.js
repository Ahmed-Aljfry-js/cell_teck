import React from "react";
import "./RetailCenterFloors.css";

import RetailCenterFloor from "./RetailCenterFloor/RetailCenterFloor";
function RetailCenterFloors({hideDetailedInfo}) {
  return (
    <div className="retail-center-floors">
      <RetailCenterFloor num={2} floorName={"2nd floor"} hideDetailedInfo={hideDetailedInfo} />
      <RetailCenterFloor num={1} floorName={"1st floor"} hideDetailedInfo={hideDetailedInfo} />
      <RetailCenterFloor num={1} floorName={"Ground floor"} hideDetailedInfo={hideDetailedInfo} />
      <RetailCenterFloor num={1} hideDetailedInfo={hideDetailedInfo} />     
    </div>
  );
}

export default RetailCenterFloors;
