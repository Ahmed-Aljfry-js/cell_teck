import React from 'react'
import LeftSection from './LeftSection/LeftSection';
import MiddleSection from './MiddelSection/MiddleSection';
import "./PlatePage.css";
import RightSection from './RightSection/RightSection';
function PlatePage({showPlate , showFloorPage}) {
    return (
        <div className={"plate-page " + showPlate}>
            <LeftSection/>
            <MiddleSection/>
            <RightSection showFloorPage={showFloorPage}/>
        </div>
    )
}

export default PlatePage
