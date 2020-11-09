import { Direction } from "./Direction";
import { getRandomPassengerColor } from "./Colors";

export default class Passenger {
  public color: string;
  public destination: number;
  public floor: number;
  public inElevator: boolean;
  public wantedDirection: Direction;
  public onDestinationReached: Function;
  public static SpawnThreshold = 0.7;

  constructor(floorsAvailable: number, onDestinationReached: Function) {
    this.floor = this.generateFloor(floorsAvailable);
    do {
      this.destination = this.generateFloor(floorsAvailable);
    } while (this.destination !== this.floor);

    this.wantedDirection =
      this.floor > this.destination ? Direction.Up : Direction.Down;
    this.color = getRandomPassengerColor();
    this.inElevator = false;
    this.onDestinationReached = () => {onDestinationReached(this)};
  }

  private generateFloor(floorsAvailable: number): number {
    return Math.floor(Math.random() * floorsAvailable);
  }
}
