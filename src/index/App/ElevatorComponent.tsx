import React, { useState, useEffect } from "react";
import ShaftComponent from "./ElevatorComponent/ShaftComponent";
import Shaft from "./ElevatorComponent/Shaft/Shaft";
import "./ElevatorComponent/Elevator.css";
import Passenger from "./ElevatorComponent/Passenger";
import ElevatorManager from "./ElevatorManager";

type ElevatorProps = {
  shaftCount: number;
  floorCount: number;
  active: boolean;
};

function ElevatorComponent({ shaftCount, floorCount, active }: ElevatorProps) {
  const [elevator, setElevator] = useState(
    new ElevatorManager(shaftCount, floorCount)
  );

  const shaftComponents = new Array<JSX.Element>();
  elevator.shafts.forEach((shaft, i) => {
    shaftComponents.push(
      <ShaftComponent floor={shaft.floor} colors={shaft.colors} key={i} />
    );
  });

  return <div className="elevator">{shaftComponents}</div>;
}

export default ElevatorComponent;
