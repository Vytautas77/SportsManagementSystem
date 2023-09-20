import { Athlete } from "./athlete";

export class Competition {
      competitionId: string;
      date: string;
      location: string;
      athletes: Athlete[] = [];

      constructor(competitionId: string, date: string, location: string) {
            this.competitionId = competitionId;
            this.date = date;
            this.location = location;
      }
      registerAthlete(athlete: Athlete): void {
            this.athletes.push(athlete);
      }
      startCompetition(): void {
            if (this.athletes.length < 2) {
                  console.log(
                        "Not enough athletes registered. At least 2 athletes are required to start the competition.",
                  );
            } else {
                  console.log(
                        `The competition ${this.competitionId} on ${this.date} at ${this.location} has started.`,
                  );
                  console.log("Registered Athletes:");
                  for (const athlete of this.athletes) {
                        console.log(
                              `Name: ${athlete.name}, age: ${athlete.age}, sports field: ${athlete.sportsfield}.`,
                        );
                  }
            }
      }
}
