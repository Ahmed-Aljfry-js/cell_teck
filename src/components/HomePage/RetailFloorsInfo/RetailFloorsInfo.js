import React from "react";
import "./RetailFloorsInfo.css";

import plant from './plant.png';
import upArrow from './up1.png';
import downArrow from './down1.png';

import { useSelector } from "react-redux";

import {getFloorNumber} from '../../FloorNumber/floorSlice'


function RetailFloorsInfo({ showRetailCenterFloorsInfo, showFloorPage }) {

  const theFloorNumber = useSelector(getFloorNumber);


  return (
    <div className={"retail-floors-info " + showRetailCenterFloorsInfo}>
      <div className="retail-right-section">
        <div className="visual-info">
          <div className="upper-info">
            <div>
              <span>You're on the</span>
              <span>{theFloorNumber} Floor</span>
            </div>
          </div>

          <div className="lower-info">
          <button>
              <img style={{
                width:"20px",
                height:"20px"
              }} src={upArrow} alt="move up" width="20px" height="20px"/>
            </button>
            <div>
              <div>
                <span>Floor Plate</span>
                <button onClick={showFloorPage}>View Plate</button>
              </div>
              <img src={plant} alt="floor-plate" />
            </div>
            <button>
              <img style={{
                width:"20px",
                height:"20px"
              }} src={downArrow} alt="move up" width="20px" height="20px"/>
            </button>
          </div>
        </div>
        <div className="new-span">
          <span>
            Click on any floor number or simply use the arrows to view the floor
            details and plane.
          </span>
        </div>
      </div>
    </div>
  );
}

export default RetailFloorsInfo;
