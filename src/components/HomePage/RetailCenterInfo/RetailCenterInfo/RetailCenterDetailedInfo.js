import React from "react";
import "./RetailCenterDetailedInfo.css";
import RetailCenterLowerInfo from "./RetailCenterLowerInfo/RetailCenterLowerInfo";

import RetailCenterUpperInfo from "./RetailCenterUpperInfo/RetailCenterUpperInfo";

function RetailCenterDetailedInfo({ hideTheDetailedInfoSection }) {
  return (
    <div
      className={"retail-center-detailed-info " + hideTheDetailedInfoSection}
    >
      <RetailCenterUpperInfo />
      <RetailCenterLowerInfo />
    </div>
  );
}

export default RetailCenterDetailedInfo;
