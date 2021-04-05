import React from "react";
import Type from "./Type/Type";
import "./Types.css";
function Types(props) {
  return (
    <div className={`level-type-wrapper ${props.isShown}`}>
      <Type />
      <Type typeNum={2}/>
    </div>
  );
}

export default Types;
