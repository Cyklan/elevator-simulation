import React, { useState } from "react";
import "./App/App.css";
import ElevatorComponent from "./App/ElevatorComponent";

function App() {
  const [elevatorShafts, setElevatorCount] = useState(2);
  const [active, setActive] = useState(false);

  const buttonStyle = {
    backgroundColor: active ? "#db4343" : "#0093cc",
  };

  return (
    <div className="App">
      <ElevatorComponent
        shaftCount={elevatorShafts}
        floorCount={3}
        active={active}
      />
      <button
        className="start-button"
        onClick={() => setActive(!active)}
        style={buttonStyle}
      >
        {active ? "stop" : "start"} simulation
      </button>
    </div>
  );
}

export default App;
