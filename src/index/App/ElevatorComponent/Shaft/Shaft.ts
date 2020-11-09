import { Colorset } from "../Colors";
import { Direction } from "../Direction";
import Passenger from "../Passenger";
import { getRandomColorSet } from "../Colors";

export default class Shaft {
  public floor: number;
  public floorCount: number;
  public passengers: Passenger[];
  public direction: Direction;
  public colors: Colorset;
  public destinations: number[];

  constructor(floorCount: number) {
    this.floor = 0;
    this.floorCount = floorCount;
    this.passengers = new Array<Passenger>();
    this.direction = Direction.None;
    this.colors = getRandomColorSet();
    this.destinations = [];
  }

  public moveUp() {
    this.floor = Math.max(0, this.floor - 1);
  }

  public moveDown() {
    this.floor = Math.min(this.floorCount, this.floor + 1);
  }

  public moveToNextFloor() {
    if (this.idle) return;
  }

  public get idle(): boolean {
    return this.destinations.length === 0;
  }
}
