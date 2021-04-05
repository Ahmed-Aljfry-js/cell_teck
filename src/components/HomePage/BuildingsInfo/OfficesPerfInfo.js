import React from "react";
import "./OfficesPrefInfo.css";

function OfficesPerfInfo(props) {
  /* 
            Type   Name     Default
    @param String isShown    hidden
    @param String isBuildingClicked  hidden
*/

  return (
    <div className={` office-pref-info   ${props.isShown}`}>
      <span>Center 1</span>
      <span>OFFICES TOWER</span>
      <button onClick={props.showDetails}>Enter</button>
    </div>
  );
}

export default OfficesPerfInfo;
