import React from "react";
import "./OfficesFloorsInfo.css";

import gallery from './Gallery.png';
function OfficesFloorsInfo() {
  return (
    <div className="offices-floors-info">
      <div className="offices-right-section">
        <div className="visual-info">
          <div className="upper-info">
            <button>UP</button>
            <div>
              <span>You're on the</span>
              <span>8th Floor</span>
            </div>
          </div>

          <div className="lower-info">
            <div>
              <div>
                <span>Floor Plate</span>
                <button>View Plate</button>
              </div>
              <img src={gallery} alt="floor-plate" />
            </div>
            <button>DN</button>
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

export default OfficesFloorsInfo;

// <div className="offices-floors-info">

// </div>
