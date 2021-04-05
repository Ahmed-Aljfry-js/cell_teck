import React from "react";

import "./RightSection.css";

import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  getFloorNumber,
  increment,
} from "../../FloorNumber/floorSlice";

import upArrow from "./up1.png";
import downArrow from "./down1.png";

function RightSection({ showHomePage }) {
  const number = useSelector(getFloorNumber);
  const dispatch = useDispatch();

  // const [incrementAmount, setIncrementAmount] = useState(number);

  return (
    <div className="right-section">
      <button className="floor-exit-btn" onClick={showHomePage}>
        X
      </button>
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
      <button onClick={() => dispatch(increment())} className="floor-nav-btn">
        <img src={upArrow} alt="move up" width="20px" height="20px" />
      </button>
      <button onClick={() => dispatch(decrement())} className="floor-nav-btn">
        <img src={downArrow} alt="move up" width="20px" height="20px" />
      </button>
    </div>
  );
}

export default RightSection;
