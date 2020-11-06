import React, { useState, useEffect } from "react";
import "./Cabin/Cabin.css";

type CabinProps = {
    floor: number
}

function Cabin({floor}: CabinProps) {
  
  const cabinPosition = {
    transform: `translateY(${floor * 13}rem)`,
  };

  return <div className="cabin" id="cabin" style={cabinPosition}>
  </div>;
}

export default Cabin;
