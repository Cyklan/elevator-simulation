import { Direction } from "./Direction";

export default class Passenger {
  public floor: number;
  public destination: number;
  public wantedDirection: Direction;

  constructor(floorsAvailable: number) {
    this.floor = this.generateFloor(floorsAvailable);
    do {
      this.destination = this.generateFloor(floorsAvailable);
    } while (this.destination !== this.floor);

    this.wantedDirection =
      this.floor > this.destination ? Direction.Up : Direction.Down;
  }

  private generateFloor(floorsAvailable: number): number {
    return Math.floor(Math.random() * floorsAvailable);
  }
}
