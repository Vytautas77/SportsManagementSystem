import { Athlete } from "../athlete";

export class Spinter extends Athlete {
      best100mTime: number;
      best200mTime: number;
      sportsfield: string = "Spinter";

      constructor(
            athleteId: string,
            name: string,
            age: string,
            best100mTime: number,
            best200mTime: number,
      ) {
            super(athleteId, name, age);
            this.best100mTime = best100mTime;
            this.best200mTime = best200mTime;
      }
      train(): void {}
      compete(): void {}
}
