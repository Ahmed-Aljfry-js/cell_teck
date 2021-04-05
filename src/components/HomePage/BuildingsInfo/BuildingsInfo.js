import React, { useState } from "react";
import "./BuildingsInfo.css";

import OfficesPerfInfo from "./OfficesPerfInfo";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import Floors from "./Floors/Floors";
import NavBtns from "./NavBtns/NavBtns";
// import ShortLogo from "./ShortLogo/ShortLogo";

import "../OfficesFloorsInfo/OfficesFloorsInfo.css";

import gallery from "./Gallery.png";

import upArrow from "./up1.png";
import downArrow from "./down1.png";

function BuildingsInfo(props) {
  // Showing the floors info
  function showFloorsBtn(e) {
    e.preventDefault();

    if (props.showFloors === "hidden") {
      props.setShowFloors("shown");
      props.setEnterBtnHidden("hidden");
    }
  }

  // Floor Number to add
  const [floorNumber, setFloorNumber] = useState(0);
  const [hideGallery, setHideGallery] = useState("shown");

  // Functions to show floors info
  function showFloorsInfos(e, num) {
    e.preventDefault();

    if (props.floorsInfos === "hidden") {
      props.setFloorsInfos("shown");
      // hiding the gallery img
      setHideGallery("hidden");
      // setting the floor num
      setFloorNumber(num);
    }
  }

  // Logic to decrease Floor number
  function IncreaseFloorNumber() {
    let fNum = floorNumber;
    if (fNum < 20) {
      fNum++;
    }
    setFloorNumber(fNum);
  }

  // Logic to decrease Floor Number
  function DecreaseFloorNumber() {
    let fNum = floorNumber;
    if (fNum > 0) {
      fNum--;
    }
    setFloorNumber(fNum);
  }

  return (
    <div className={`buildings-info ${props.showBuildingOne}`}>
      {/* <ShortLogo isShown={props.showFloors} /> */}
      {/* 
          The Floors info
      */}

      <Floors showFloorsInfos={showFloorsInfos} isShown={props.showFloors} />

      {/* The Information where the gallery appears */}
      <DetailedInfo hideGallery={hideGallery} isShown={props.showFloors} />

      {/* The residential and retail buttons are here */}
      <NavBtns isShown={props.showFloors} />

      {/* The Information where the floors number and "you are on " word appears and where also gallery appear */}
      <OfficesPerfInfo
        showDetails={showFloorsBtn}
        isShown={props.enterBtnHidden}
        isBuildingClicked={props.clickingBuilding}
      />

      {/* The office floors info */}
      <div className={"offices-floors-info " + props.floorsInfos}>
        <div className="offices-right-section">
          <div className="visual-info">
            <div className="upper-info">
              <button onClick={IncreaseFloorNumber}>
                <img src={upArrow} alt="move up" width="20px" height="20px" />
              </button>
              <div>
                <span>You're on the</span>
                <span>{floorNumber ? floorNumber + " Floor" : "Basement"}</span>
              </div>
            </div>

            <div className="lower-info">
              <div>
                <div>
                  <span>Floor Plate</span>
                  <button onClick={props.showFloorPage}>View Plate</button>
                </div>
                <img
                  style={{
                    width: "315px",
                    height: "193px",
                  }}
                  src={gallery}
                  alt="floor-plate"
                />
              </div>
              <button onClick={DecreaseFloorNumber}>
                <img src={downArrow} alt="move up" width="20px" height="20px" />
              </button>
            </div>
          </div>
          <span>
            Click on any floor number or simply use the arrows to view the floor
            details and plane
          </span>
        </div>
      </div>
    </div>
  );
}

export default BuildingsInfo;
