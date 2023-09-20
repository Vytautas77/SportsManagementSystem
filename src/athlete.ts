export abstract class Athlete {
      athleteId: string;
      name: string;
      age: string;
      sportsfield: string;

      abstract train(): void;
      abstract compete(): void;

      constructor(athleteId: string, name: string, age: string) {
            this.athleteId = athleteId;
            this.name = name;
            this.age = age;
      }
}
