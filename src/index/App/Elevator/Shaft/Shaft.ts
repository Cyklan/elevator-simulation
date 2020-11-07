import { Colorset } from "../Colors";
import { Direction } from "../Direction";
import Passenger from "../Passenger";
import { getRandomColorSet } from "../Colors";

export default class Shaft {
  public floor: number;
  public floorCount: number;
  public passengers: Passenger[];
  public direction: Direction;
  public idle: boolean;
  public colors: Colorset;

  constructor(floorCount: number) {
    this.floor = 0;
    this.floorCount = floorCount;
    this.passengers = new Array<Passenger>();
    this.direction = Direction.None;
    this.idle = true;
    this.colors = getRandomColorSet();
  }

  public moveUp() {
    this.floor = Math.max(0, this.floor - 1);
  }

  public moveDown() {
    this.floor = Math.min(this.floorCount, this.floor + 1);
  }
}
