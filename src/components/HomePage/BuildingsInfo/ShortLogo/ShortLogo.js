import React from "react";
import "./ShortLogo.css";

import theLogo from './hhh.png';

function ShortLogo(props) {
  return (
    <a href="/" className={"short-logo " + props.isShown}>
      <img src={theLogo || "#"} alt="logo" className="logo" />
    </a>
  );
}

export default ShortLogo;
