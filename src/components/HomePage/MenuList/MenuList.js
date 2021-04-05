import React, { useState } from "react";
import "./MenuList.css";

import Buildings from "./Buildings/Buildings";
import BuildingSearch from "./BuildingSearch/BuildingSearch";
import MenuListLink from "./MenuListLink/MenuListLink";
import MenuListLogo from "./MenuListLogo/MenuListLogo";
import SearchSection from "./SearchSection/SearchSection";

function MenuList(props) {
  // Showing the BuildingSearch state
  const [showBuildingSearch, setShowBuildingSearch] = useState("hidden");
  // Showing the Buildings state
  const [showBuildings, setShowBuildings] = useState("shown-for-buildings");

  // Show BuildingSearch logic
  function showBuildingSearchLogic(e) {
    e.preventDefault();

    if (showBuildingSearch === "hidden") {
      setShowBuildingSearch("shown-for-buildings");
      setShowBuildings("hidden");
    }
  }


  return (
    <div className={`menu-list ${props.MenuListHiddenState}`}>
      <MenuListLogo />
      <SearchSection hideBuildings={showBuildingSearchLogic} />
      <Buildings isShown={showBuildings} hideBuildings={showBuildingSearchLogic}/>
      <div className={`building-search-container ${showBuildingSearch}`}>
        <BuildingSearch />
      </div>
      <MenuListLink />
    </div>
  );
}

export default MenuList;
