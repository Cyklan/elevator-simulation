import React, {useState} from 'react';
import "./App/App.css";
import Elevator from "./App/Elevator"

function App() {
  
  const [elevatorCount, setElevatorCount] = useState(1)
  
  const elevators = []
  for (let i = 0; i < elevatorCount; i++) {
    elevators.push(<Elevator key={i}/>)
  }

  return (
    <div className="App">
      {elevators}
    </div>
  );
}

export default App;
