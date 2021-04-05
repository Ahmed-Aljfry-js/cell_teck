import React, { useState } from "react";
import "./HomePage.css";

import GlowingBuildings from "./GlowingBuildings/GlowingBuildings";
import MenuBtn from "./MenuBtn/MenuBtn";
import MenuList from "./MenuList/MenuList";
import BuildingsInfo from "./BuildingsInfo/BuildingsInfo";
import RetailCenterInfo from "./RetailCenterInfo/RetailCenterInfo";
import RetailFloorsInfo from "./RetailFloorsInfo/RetailFloorsInfo";
import ResidentialTowerDetailedInfo from "./ResidentialTowerInfo/ResidentialTowerDetailedInfo/ResidentialTowerDetailedInfo";
import ResidentialFloorsInfo from './ResidentialFloorsInfo/ResidentialFloorsInfo';

function HomePage({showFloorPage,showHome}) {
  // // Cover section state
  const [hiddenCover, setHiddenCover] = useState("hidden");

  // // Menu button state
  const [hiddenMenuBtn, setHiddenMenuBtn] = useState("shown");

  // // List Menu state
  const [menuListHiddenState, setMenuListHiddenState] = useState("hidden");

  // // BuildingOne glowing state
  // // const [buildingOneGlowing, setBuildingOneGlowing] = useState(false);
  const [buildingOneHiddenState, setBuildingOneHiddenState] = useState(
    "hidden"
  );

  // // BuildingTwo glowing state
  // // const [buildingTwoGlowing, setBuildingTwoGlowing] = useState(false);
  const [buildingTwoHiddenState, setBuildingTwoHiddenState] = useState(
    "hidden"
  );

  // // BuildingThree glowing state
  // // const [buildingThreeGlowing, setBuildingThreeGlowing] = useState(false);
  const [buildingThreeHiddenState, setBuildingThreeHiddenState] = useState(
    "hidden"
  );

  // // Manage the glowing buildings
  const [glowingBuildingState, setGlowingBuildingState] = useState("shown");

  // // Mange pref info page shown
  const [showBuildingOneDetails, setShowBuildingOneDetails] = useState(
    "hidden"
  );


  // States for only building one 
  const [showFloors, setShowFloors] = useState("hidden");
  const [enterBtnHidden, setEnterBtnHidden] = useState("shown");

  // Floors Info state
  const [floorsInfos, setFloorsInfos] = useState("hidden");

  // // Logic to show only the building one
  function glowBuildingOne(e) {
    e.preventDefault();

    if (buildingOneHiddenState === "hidden") {
      setBuildingOneHiddenState("shown");
      setBuildingTwoHiddenState("hidden");
      setBuildingThreeHiddenState("hidden");

      // Making the BuildingOne component shown
      setShowBuildingOneDetails("shown");


      // Hiding the ResidentialPrefInfo comp
      setShowResidentialPrefInfo("hidden");
      
      // Hiding the pref Info
      setShowRetailCenterPrefInfo("hidden");

      setEnterBtnHidden("shown");
      setShowFloors("hidden");

      setHiddenCover("shown");
    } else {
      setBuildingOneHiddenState("hidden");
      setHiddenCover("hidden");

      // Hiding BuildingOne component
      setShowBuildingOneDetails("hidden");

      // Hiding the floors
      setFloorsInfos("hidden");
    }
  }



  // // Showing the logic to show the menu list
  function showMenuList(e) {
    e.preventDefault();

    // Showing the cover
    if (hiddenCover === "hidden") {
      setHiddenCover("shown");

      setGlowingBuildingState("hidden");

      // showing the glowing buildings
      setGlowingBuildingState("shown");

      // Showing the hidden menu
      setMenuListHiddenState("shown");

      // Hiding the menu btn
      setHiddenMenuBtn("hidden");
    }
  }






  // // The logic to hide the menu list
  function hideMenuList(e) {
    e.preventDefault();

    if (menuListHiddenState === "shown") {
      // Hiding the list menu
      setMenuListHiddenState("hidden");

      // Hiding the cover div
      setHiddenCover("hidden");

      // Showing the menu button
      setHiddenMenuBtn("shown");
    }
  }






  // All the logic for showing the floors info for retail center
  const [showRetailCenterInfo, setShowRetailCenterInfo] = useState("hidden");
  const [showRetailCenterFloorsInfo, setShowRetailCenterFloorsInfo] = useState(
    "hidden"
  );
  const [showRetailCenterPrefInfo, setShowRetailCenterPrefInfo] = useState(
    "hidden"
  );
  const [
    makeShowRetailCenterDetailedInfo,
    setMakeShowRetailCenterDetailedInfo,
  ] = useState("shown");

  // Logic to show detailed Info
  function showRetailCenterDetailedInfo(e) {
    e.preventDefault();

    setShowRetailCenterInfo("shown");
    setShowRetailCenterPrefInfo("hidden");
  }

  // Logic to show the RetailCenterFloorsInfo
  function makeShowRetailCenterFloorsInfo(e) {
    e.preventDefault();

    setMakeShowRetailCenterDetailedInfo("hidden");
    setShowRetailCenterFloorsInfo("shown");
  }

  // // Logic to show only building two
  function glowBuildingTwo(e) {
    e.preventDefault();

    if (buildingTwoHiddenState === "hidden") {
      setBuildingTwoHiddenState("shown");
      setBuildingOneHiddenState("hidden");
      setBuildingThreeHiddenState("hidden");

      // Showing the ResidentialPrefInfo comp
      setShowResidentialPrefInfo("hidden");
      
      // Showing the pref Info
      setShowRetailCenterPrefInfo("shown");
        
      // Hiding Offices Pref Info
      setShowBuildingOneDetails("hidden");


      setHiddenCover("shown");
    } else {
      setBuildingTwoHiddenState("hidden");
      setHiddenCover("hidden");

      // Hiding the RetailCenterInfo comp
      setShowRetailCenterInfo("hidden");

      // Hide RetailCenterFloors comp
      setShowRetailCenterFloorsInfo("hidden");

      // Hiding the pref Info
      setShowRetailCenterPrefInfo("hidden");
    }
  }









  // All the logic for showing building three
  const [showResidentialPrefInfo, setShowResidentialPrefInfo] = useState("hidden");
  const [showResidentialFloorsInfo, setShowResidentialFloorsInfo] = useState("hidden");
  const [showResidentialDetailedInfo, setShowResidentialDetailedInfo] = useState("hidden");
  const [HideDetailResidentialGallery, setHideDetailResidentialGallery] = useState("hidden");


  // Showing the ResidentialFloorsDetail comp
  function makeShowResidentialFloorsDetails(e) {
    e.preventDefault();


    setShowResidentialFloorsInfo("shown");

    // Hiding the Detailed info comp

    setHideDetailResidentialGallery("hidden");
  }

  // Showing the ResidentialDetailedInfo comp 
  function makeShowResidentialDetailedInfo(e) {
    e.preventDefault();

    // Hiding pref info 
    setShowResidentialPrefInfo("hidden");

    // Showing detailed info
    setShowResidentialDetailedInfo("shown");
    setHideDetailResidentialGallery("shown");
  }

    // // Logic to show only building three
    function glowBuildingThree(e) {
      e.preventDefault();
  
      if (buildingThreeHiddenState === "hidden") {
        setBuildingThreeHiddenState("shown");
        setBuildingTwoHiddenState("hidden");
        setBuildingOneHiddenState("hidden");

        // Showing the ResidentialPrefInfo comp
        setShowResidentialPrefInfo("shown");

        
        // Hiding Offices Pref Info
        setShowBuildingOneDetails("hidden");

        // Hiding Retail Center pref Info
        setShowRetailCenterPrefInfo("hidden");



        setHiddenCover("shown");
      } else {
        setBuildingThreeHiddenState("hidden");
        setHiddenCover("hidden");

        // Hiding the Offices prefInfo
        setShowResidentialPrefInfo("hidden");

        // Hiding the floors
        setShowResidentialFloorsInfo("hidden");

        // Hiding the detailed Info
        setShowResidentialDetailedInfo("hidden");

        // Hiding the gallery
        setHideDetailResidentialGallery("hidden");
      }
    }


  


  return (
    <div className={"home-page " + showHome}>
      <div className={`cover ${hiddenCover}`}></div>

      <MenuBtn showMenu={showMenuList} hidden={hiddenMenuBtn} />

      <MenuList MenuListHiddenState={menuListHiddenState} />

      <div
        onClick={hideMenuList}
        className={`hide-menu-hidden-btn ${menuListHiddenState}`}
      ></div>

      {/* Building One details showing info about the building it should be with */}
      {/* @pram clickingBuilding is a value that hold a string to the "shown" or "hidden" classes */}
      {/* <BuildingsInfo showBuildingOne={showBuildingOneDetails} /> */}
      <GlowingBuildings
        toggleBuildingOne={glowBuildingOne}
        toggleBuildingTwo={glowBuildingTwo}
        toggleBuildingThree={glowBuildingThree}
        isBuildingOneShown={buildingOneHiddenState}
        isBuildingTwoShown={buildingTwoHiddenState}
        isBuildingThreeShown={buildingThreeHiddenState}
        isGlowingBuildingHidden={glowingBuildingState}
      />

      <div
        onClick={hideMenuList}
        className={`hide-menu-hidden-btn ${menuListHiddenState}`}
      ></div>

      <BuildingsInfo setFloorsInfos={setFloorsInfos} floorsInfos={floorsInfos} setEnterBtnHidden={setEnterBtnHidden} setShowFloors={setShowFloors} enterBtnHidden={enterBtnHidden}  showFloors={showFloors} showFloorPage={showFloorPage} showBuildingOne={showBuildingOneDetails} />

      {/* Making pref info for Retail Center */}
      <div className={"retail-center-pref-info " + showRetailCenterPrefInfo}>
        <span>Center 2</span>
        <span>RETAIL CENTER</span>
        <button onClick={showRetailCenterDetailedInfo}>Enter</button>
      </div>

      <RetailCenterInfo
        hideDetailedInfo={makeShowRetailCenterFloorsInfo}
        hideTheDetailedInfoSection={makeShowRetailCenterDetailedInfo}
        showRetailCenterInfo={showRetailCenterInfo}
      />

      <RetailFloorsInfo
showFloorPage={showFloorPage}

        showRetailCenterFloorsInfo={showRetailCenterFloorsInfo}
      />

      {/* Making pref info for Offices tower */}
      <div className={"retail-center-pref-info " + showResidentialPrefInfo}>
        <span>Center 3</span>
        <span>RESIDENTIAL TOWER</span>
        <button onClick={makeShowResidentialDetailedInfo}>Enter</button>
      </div>

      <ResidentialTowerDetailedInfo HideDetailResidentialGallery={HideDetailResidentialGallery} makeShowResidentialFloorsDetails={makeShowResidentialFloorsDetails} showResidentialDetailedInfo={showResidentialDetailedInfo}/>

      <ResidentialFloorsInfo showFloorPage={showFloorPage} showResidentialFloorsInfo={showResidentialFloorsInfo}/>



       

        
    </div>
  );
}

export default HomePage;
