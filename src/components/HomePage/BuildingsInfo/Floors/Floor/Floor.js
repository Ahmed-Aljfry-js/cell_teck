import React from "react";
import "./Floor.css";



function Floor({ floorName, displayInfo, num }) {


  return floorName === "Basement" ? (
    <button onClick={(e) => displayInfo(e,num)} className="floor">
      {floorName}
    </button>
  ) : (
    <button onClick={(e) => displayInfo(e,num)} className="floor">
      {floorName + " floor"}
    </button>
  );
}

export default Floor;
