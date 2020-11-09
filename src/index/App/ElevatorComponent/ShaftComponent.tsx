import React from "react";
import { Colorset } from "./Colors";
import Cabin from "./Shaft/Cabin";
import "./Shaft/Shaft.css";

type ShaftProps = {
  floor: number;
  colors: Colorset;
};

function ShaftComponent({ floor, colors }: ShaftProps) {
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
