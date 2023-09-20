import { Athlete } from "../athlete";

export class Swimmer extends Athlete {
      preferredStroke: string;
      best100mFreestyleTime: number;
      sportsfield: string = "Swimmer";
      constructor(
            athleteId: string,
            name: string,
            age: string,
            preferredStroke: string,
            best100mFreestyleTime: number,
      ) {
            super(athleteId, name, age);
            this.preferredStroke = preferredStroke;
            this.best100mFreestyleTime = best100mFreestyleTime;
      }
      train(): void {}
      compete(): void {}
}
