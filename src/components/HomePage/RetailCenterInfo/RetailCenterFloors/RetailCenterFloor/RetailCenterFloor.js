import React from "react";
import "./RetailCenterFloor.css";

import {useDispatch} from 'react-redux';

import {setFloorNumber} from '../../../../FloorNumber/floorSlice'

function RetailCenterFloor({hideDetailedInfo, floorName, num}) {

  const dispatch = useDispatch();

  return <button onMouseOut={()=> dispatch(setFloorNumber(num))} onClick={hideDetailedInfo} className="retail-center-floor">{floorName || "basement floor"}</button>;
}

export default RetailCenterFloor;
