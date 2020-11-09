import Shaft from "./ElevatorComponent/Shaft/Shaft";
import Passenger from "./ElevatorComponent/Passenger";
import Direction from "./ElevatorComponent/Direction";

/**
 * Depicts an elevator call with the direction that has been called as well as the floor it has been called on.
 */
type FloorCalledDirection = {
  floor: number;
  direction: Direction;
};

class ElevatorManager {
  public shafts: Shaft[];
  public passengers: Passenger[];
  public floorsCalled: FloorCalledDirection[];

  public floors: number;

  public interval: number;
  private _active: boolean;

  private readonly updateInterval = 500;

  constructor(shaftCount: number, floorCount: number) {
    this.shafts = new Array<Shaft>(shaftCount);
    this.passengers = new Array<Passenger>();
    this.floorsCalled = new Array<FloorCalledDirection>();

    this.floors = floorCount;

    this._active = false;
    this.interval = NaN;
  }

  public get active(): boolean {
    return this._active;
  }

  public set active(v: boolean) {
    this._active = v;
    this.interval = window.setTimeout(() => {}, this.updateInterval);
  }

  public addShaft(): Shaft {
    const shaft = new Shaft(this.floors);
    this.shafts.push(shaft);
    return shaft;
  }

  public removeShaft() {
    this.shafts.pop();
  }

  public generatePassenger(): Passenger {
    const passenger = new Passenger(this.floors, this.removePassenger);
    this.passengers.push(passenger);
    return passenger;
  }

  private removePassenger(passenger: Passenger) {
    this.passengers.splice(this.passengers.indexOf(passenger), 1);
  }

  callElevator(passenger: Passenger) {
    const call = {
      floor: passenger.floor,
      direction: passenger.wantedDirection,
    };

    if (this.floorsCalled.indexOf(call) === -1) {
      this.floorsCalled.push(call);
    }
  }
}

export default ElevatorManager;
