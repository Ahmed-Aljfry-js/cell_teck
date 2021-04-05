import React from "react";
import "./RightSection.css"

import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  getFloorNumber,
  increment,
} from "../../FloorNumber/floorSlice";


function RightSection({showFloorPage}) {

  const number = useSelector(getFloorNumber);
  const dispatch = useDispatch();


  return (
    <div className="plate-right-section">
      <button onClick={showFloorPage} className="floor-exit-btn">X</button>
      <div className="floor-name">
        <span className="floor-letter">r</span>
        <span className="floor-letter">o</span>
        <span className="floor-letter">o</span>
        <span className="floor-letter">l</span>
        <span className="floor-letter">F</span>
        <span className="floor-letter">s</span>
        <span className="floor-letter">h</span>
        <span className="floor-letter">t</span>
        <span className="floor-letter">{number}</span>
      </div>
      <button onClick={()=> dispatch(increment())} className="floor-nav-btn">UP</button>
      <button onClick={()=> dispatch(decrement())} className="floor-nav-btn">DN</button>
    </div>
  );
}

export default RightSection;
