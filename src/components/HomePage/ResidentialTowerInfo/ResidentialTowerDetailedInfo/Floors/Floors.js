import React from "react";
import "./Floors.css";

import {useDispatch} from 'react-redux';

import {setFloorNumber} from '../../../../FloorNumber/floorSlice'

function Floors({makeShowResidentialFloorsDetails}) {


  const dispatch = useDispatch();
  return (
    <div className="residential-floors">
      <button onMouseOut={()=> dispatch(setFloorNumber(19))} onClick={makeShowResidentialFloorsDetails} className="residential-floor">19th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(18))} onClick={makeShowResidentialFloorsDetails} className="residential-floor">18th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(17))} onClick={makeShowResidentialFloorsDetails} className="residential-floor">17th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(16))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">16th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(15))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">15th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(14))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">14th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(13))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">13th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(12))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">12th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(11))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">11th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(10))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">10th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(9))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">9th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(8))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">8th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(7))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">7th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(6))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">6th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(5))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">5th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(4))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">4th floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(3))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">3rd floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(2))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">2nd floor</button>
      <button onMouseOut={()=> dispatch(setFloorNumber(1))}onClick={makeShowResidentialFloorsDetails} className="residential-floor">1st floor</button>
      <button onClick={makeShowResidentialFloorsDetails} className="residential-floor">Ground floor</button>
      <button onClick={makeShowResidentialFloorsDetails} className="residential-floor">Basement floor</button>     
    </div>
  );
}

export default Floors;
