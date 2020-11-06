import React, {useState} from 'react';
import './App.css';
import Elevator from "./Elevator"

function App() {
  
  const [elevatorCount, setElevatorCount] = useState(1)
  
  const elevators = []
  for (let i = 0; i < elevatorCount; i++) {
    elevators.push(<Elevator />)
  }

  return (
    <div className="App">
      {elevators}
    </div>
  );
}

export default App;
