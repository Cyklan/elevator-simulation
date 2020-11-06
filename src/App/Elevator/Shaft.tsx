import React, { useEffect, useState } from "react";
import { moveMessagePortToContext } from "worker_threads";
import { Direction } from "./Direction";
import Cabin from "./Shaft/Cabin";
import "./Shaft/Shaft.css";

type ShaftProps = {
  idle: boolean;
  direction: Direction;
};

function Shaft({ idle, direction }: ShaftProps) {

  const [floor, setFloor] = useState(0)

  useEffect(() => {
    movementLoop()
    setInterval(() => {
      movementLoop()
    }, 12000)
  }, [])

  const movementLoop = () => {
    setTimeout(() => setFloor(1), 3000)
    setTimeout(() => setFloor(2), 6000)
    setTimeout(() => setFloor(1), 9000)
    setTimeout(() => setFloor(0), 12000)
  }

  return (
    <div className="shaft">
        <Cabin floor={floor}/>
    </div>
  );
}

export default Shaft;
