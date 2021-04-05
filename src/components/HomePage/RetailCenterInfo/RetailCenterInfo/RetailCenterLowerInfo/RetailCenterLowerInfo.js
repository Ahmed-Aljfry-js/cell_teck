import React from 'react'
import "./RetailCenterLowerInfo.css";

import gallery from './Gallery.png';

function RetailCenterLowerInfo() {
    return (
        <div className="retail-center-lower-info">
        <div className="upper-section">
          <span className="gallery">Gallery</span>
          <button className="view-gallery">View Gallery</button>
        </div>
        <div className="lower-section-gallery">
          <img src={gallery} alt="Gallery" className="gallery-img" />
        </div>
      </div>
    )
}

export default RetailCenterLowerInfo
