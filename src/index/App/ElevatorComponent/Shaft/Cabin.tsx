import React, { useState, useEffect } from "react";
import "./Cabin/Cabin.css";

type CabinProps = {
  floor: number;
  color: string;
};

function Cabin({ floor, color }: CabinProps) {
  const cabinStyles = {
    transform: `translateY(${floor * 13}rem)`,
    backgroundColor: color,
  };

  return <div className="cabin" id="cabin" style={cabinStyles}></div>;
}

export default Cabin;
