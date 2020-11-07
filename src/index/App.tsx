import React, { useState } from "react";
import "./App/App.css";
import Elevator from "./App/Elevator";

function App() {
  const [elevatorShafts, setElevatorCount] = useState(2);

  return (
    <div className="App">
      <Elevator shaftCount={elevatorShafts} floorCount={3} />
    </div>
  );
}

export default App;
