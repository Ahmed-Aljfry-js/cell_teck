import React from "react";
import Floors from "./Floors/Floors";
import "./ResidentialTowerDetailedInfo.css";
import ResidentialNav from "./ResidentialNav/ResidentialNav";

import gallery from './Gallery.png';

function ResidentialTowerDetailedInfo({showResidentialDetailedInfo, makeShowResidentialFloorsDetails,HideDetailResidentialGallery}) {
  return (
    <div className={"residential-tower-detailed-info " + showResidentialDetailedInfo}>
      <Floors makeShowResidentialFloorsDetails={makeShowResidentialFloorsDetails} />
      <ResidentialNav />
      <div className={"residential-detailed-info " + HideDetailResidentialGallery}>
        <div className="residential-upper">
            <span className="residential-location">Center3</span>
            <span className="residential-name">Residential Tower</span>

            <span className="residential-text-info">The residential tower has 
            228 hotel rooms including 14 junior suites and 79 
            apartments of 1 BR , 2 BR , 3 BR- semi furnished with electrical appliances 
            </span>


        </div>
      
      <div className="residential-lower">
          <div className="residential-lower-upper">
              <span>Gallery</span>
              <button>View Gallery</button>
          </div>
          <div className="residential-lower-lower">
              <img src={gallery} alt="galery-img"/>
          </div>
      </div>
      </div>
    </div>
  );
}

export default ResidentialTowerDetailedInfo;
