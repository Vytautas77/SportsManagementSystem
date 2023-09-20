import { Athlete } from "../athlete";
import { Endurance } from "../interface/endurance";

export class MarathonRunner extends Athlete implements Endurance {
      bestMarathonTime: number;
      sportsfield: string = "MarathonRunner";
      constructor(
            athleteId: string,
            name: string,
            age: string,
            bestMarathonTime: number,
      ) {
            super(athleteId, name, age);
            this.bestMarathonTime = bestMarathonTime;
      }
      train(): void {}
      compete(): void {}
      enduranceTraining(): void {}
      checkEnduranceLevel(): void {}
}
