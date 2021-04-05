import React  from "react";
import "./FloorPage.css";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";




function FloorPage({showFloor , showPlatePage , showHomePage}) {
  return (
    <div className={"floor-page " + showFloor}>
      <LeftSection showPlatePage={showPlatePage}/>
      <RightSection showHomePage={showHomePage} />
    </div>
  );
}

export default FloorPage;
