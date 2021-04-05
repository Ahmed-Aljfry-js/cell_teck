import React from "react";
import "./ResidentialFloorsInfo.css";

import gallery from "./Gallery.png";
import upArrow from "./up1.png";
import downArrow from "./down.png";

import { useSelector, useDispatch } from "react-redux";
import {
  getFloorNumber,
  decrement,
  increment,
} from "../../FloorNumber/floorSlice";

function ResidentialFloorsInfo({ showResidentialFloorsInfo, showFloorPage }) {
  const theFloorNumber = useSelector(getFloorNumber);
  const dispatch = useDispatch();



  return (
    <div className={"residential-floors-info " + showResidentialFloorsInfo}>
      <div className="residential-left-section">
        <img src="#" alt="logo" />
        <div className="tower-name">
          <div>
            <span>L</span>
            <span>A</span>
            <span>I</span>
            <span>T</span>
            <span>N</span>
            <span>E</span>
            <span>D</span>
            <span>I</span>
            <span>T</span>
            <span>S</span>
            <span>E</span>
            <span>R</span>
          </div>
          <div>
            <span>R</span>
            <span>E</span>
            <span>W</span>
            <span>O</span>
            <span>T</span>
          </div>
        </div>
      </div>

      <div className="residential-right-section">
        <div className="visual-info">
          <div className="upper-info">
            <button onClick={() => dispatch(increment())}>
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src={upArrow}
                alt="move up"
                width="20px"
                height="20px"
              />
            </button>
            <div>
              <span>You're on the</span>

              <span>{theFloorNumber}th Floor</span>
            </div>
          </div>

          <div className="lower-info">
            <div>
              <div>
                <span>Floor Plate</span>
                <button onClick={showFloorPage}>View Plate</button>
              </div>
              <img src={gallery} alt="floor-plate" />
            </div>
            <button onClick={() => dispatch(decrement())}>
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src={downArrow}
                alt="move up"
                width="20px"
                height="20px"
              />
            </button>
          </div>
        </div>
        <span>
          Click on any floor number or simply use the arrows to view the floor
          details and plane
        </span>
      </div>
    </div>
  );
}

export default ResidentialFloorsInfo;
