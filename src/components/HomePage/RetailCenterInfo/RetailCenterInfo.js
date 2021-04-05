import React from "react";
import "./RetailCenterInfo.css";


// import ShortLogo from "../BuildingsInfo/ShortLogo/ShortLogo";
import RetailCenterFloors from "./RetailCenterFloors/RetailCenterFloors";
import RetailCenterDetailedInfo from "./RetailCenterInfo/RetailCenterDetailedInfo";
import RetailCenterNav from "./RetailCenterNav/RetailCenterNav";

function RetailCenterInfo({ showRetailCenterInfo ,hideTheDetailedInfoSection , hideDetailedInfo}) {
  return (
    <div className={"retail-center-info " + showRetailCenterInfo}>
      {/* <ShortLogo /> */}
      <RetailCenterFloors hideDetailedInfo={hideDetailedInfo}/>
      <RetailCenterDetailedInfo hideTheDetailedInfoSection={hideTheDetailedInfoSection} />
      <RetailCenterNav />
    </div>
  );
}

export default RetailCenterInfo;
