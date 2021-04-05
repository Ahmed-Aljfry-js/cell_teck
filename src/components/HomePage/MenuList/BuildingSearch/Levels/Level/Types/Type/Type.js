import React from "react";
import "./Type.css";
function Type({typeNum}) {
  return <button className="type">Type {typeNum ||  1}</button>;
}

export default Type;
