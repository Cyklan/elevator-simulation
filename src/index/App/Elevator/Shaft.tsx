import React, { useEffect, useState } from "react";
import { moveMessagePortToContext } from "worker_threads";
import { Colorset } from "./Colors";
import { Direction } from "./Direction";
import Cabin from "./Shaft/Cabin";
import "./Shaft/Shaft.css";

type ShaftProps = {
  floor: number;
  direction: Direction;
  colors: Colorset;
};

function ShaftComponent({ floor, direction, colors }: ShaftProps) {
  const shaftStyles = {
    backgroundColor: colors.bg,
  };

  return (
    <div className="shaft" style={shaftStyles}>
      <Cabin floor={floor} color={colors.fg} />
    </div>
  );
}

export default ShaftComponent;
