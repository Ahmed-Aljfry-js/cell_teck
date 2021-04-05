import React from "react";
import "./DetailedInfo.css";
import LowerInfo from "./LowerInfo/LowerInfo";
import UpperInfo from "./UpperInfo/UpperInfo";

function DetailedInfo(props) {
  return (
    <div className={`detailed-info   ${props.isShown} ${props.hideGallery}`}>
      <UpperInfo  />
      <LowerInfo />
    </div>
  );
}

export default DetailedInfo;
