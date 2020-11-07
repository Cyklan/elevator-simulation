import React, { useState, useEffect } from "react";
import ShaftComponent from "./Elevator/Shaft";
import Shaft from "./Elevator/Shaft/Shaft";
import { Direction } from "./Elevator/Direction";
import "./Elevator/Elevator.css";

type ElevatorProps = {
  shaftCount: number;
  floorCount: number;
};

function Elevator({ shaftCount, floorCount }: ElevatorProps) {
  const [shafts, setShafts] = useState(new Array<Shaft>());

  useEffect(() => {
    const _shafts = [...shafts];
    if (shaftCount === _shafts.length) return;
    if (shaftCount < _shafts.length) {
      for (let i = 0; i <= _shafts.length - shaftCount; i++) {
        _shafts.pop();
      }
      setShafts(_shafts);
      return;
    }
    for (let i = 0; i <= shaftCount - _shafts.length; i++) {
      const shaft = new Shaft(floorCount);
      _shafts.push(shaft);
    }
    setShafts(_shafts);
  }, [shaftCount, shafts, floorCount]);

  const shaftComponents = new Array<JSX.Element>();
  shafts.forEach((shaft, i) => {
    shaftComponents.push(
      <ShaftComponent
        floor={shaft.floor}
        direction={Direction.None}
        colors={shaft.colors}
        key={i}
      />
    );
  });

  return <div className="elevator">{shaftComponents}</div>;
}

export default Elevator;
