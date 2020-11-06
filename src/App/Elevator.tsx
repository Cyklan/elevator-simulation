import React, {Fragment, useState} from "react"
import Shaft from "./Elevator/Shaft"
import { Direction } from "./Elevator/Direction"

function Elevator() {

    const [idle, setIdle] = useState(true)
    const [direction, setDirection] = useState(Direction.Down)
    
    return (
        <Shaft idle={idle} direction={direction} />
    )
}

export default Elevator