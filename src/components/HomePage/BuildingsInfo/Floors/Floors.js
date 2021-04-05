import React from "react";
import "./Floors.css";

import Floor from "./Floor/Floor";

function Floors(props) {
  return (
    <div className={"floors " + props.isShown}>
      <Floor displayInfo={props.showFloorsInfos} num={20} floorName="20th" />
      <Floor displayInfo={props.showFloorsInfos} num={19} floorName="19th" />
      <Floor displayInfo={props.showFloorsInfos} num={18} floorName="18th" />
      <Floor displayInfo={props.showFloorsInfos} num={17} floorName="17th" />
      <Floor displayInfo={props.showFloorsInfos} num={16} floorName="16th" />
      <Floor displayInfo={props.showFloorsInfos} num={15} floorName="15th" />
      <Floor displayInfo={props.showFloorsInfos} num={14} floorName="14th" />
      <Floor displayInfo={props.showFloorsInfos} num={13} floorName="13th" />
      <Floor displayInfo={props.showFloorsInfos} num={12} floorName="12th" />
      <Floor displayInfo={props.showFloorsInfos} num={11} floorName="11th" />
      <Floor displayInfo={props.showFloorsInfos} num={10} floorName="10th" />
      <Floor displayInfo={props.showFloorsInfos} num={9} floorName="9th" />
      <Floor displayInfo={props.showFloorsInfos} num={8} floorName="8th" />
      <Floor displayInfo={props.showFloorsInfos} num={7} floorName="7th" />
      <Floor displayInfo={props.showFloorsInfos} num={6} floorName="6th" />
      <Floor displayInfo={props.showFloorsInfos} num={5} floorName="5th" />
      <Floor displayInfo={props.showFloorsInfos} num={4} floorName="4th" />
      <Floor displayInfo={props.showFloorsInfos} num={3} floorName="3rd" />
      <Floor displayInfo={props.showFloorsInfos} num={2} floorName="2nd" />
      <Floor displayInfo={props.showFloorsInfos} num={1} floorName="1st" />
      <Floor displayInfo={props.showFloorsInfos} num={"Ground"} floorName="Ground" />
      <Floor
        displayInfo={props.showFloorsInfos}
        num={"Basement"}
        floorName="Basement"
      />
    </div>
  );
}

export default Floors;
