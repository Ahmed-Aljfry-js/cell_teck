import React from "react";
import "./NavBtns.css";

function NavBtns(props) {
  return (
    <div className={"nav-btn " + props.isShown}>
      <div className="other-buildings">
        <button className="building-btn">Retail</button>
        <button className="building-btn">Residential</button>
      </div>
    </div>
  );
}

export default NavBtns;
