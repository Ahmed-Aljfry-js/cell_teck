import React from "react";
import "./SearchSection.css";

function SearchSection(props) {
  return (
    <div className="search-section">
      <input
        onChange={props.hideBuildings}
        type="text"
        className="search"
        placeholder="Search"
      />
      <img src="#" alt="icon" className="search-icon" />
    </div>
  );
}

export default SearchSection;
