import React from "react";
import Level from "./Level/Level";
import "./Levels.css";
function Levels(props) {
  return (
    <div className={`search-result-levels ${props.isShown}`}>
      <Level  />
      <Level levelNum={2}/>
      <Level levelNum={3}/>
      <Level levelNum={4}/>
      <Level levelNum={5}/>
      <Level levelNum={6}/>
      <Level levelNum={7}/>
      <Level levelNum={8}/>
      <Level levelNum={9}/>
      <Level levelNum={10}/>
      <Level levelNum={11}/>
      <Level levelNum={12}/>
      <Level levelNum={13}/>
    </div>
  );
}

export default Levels;
