import { MarathonRunner } from "./athletes/marathonRunner";
import { Spinter } from "./athletes/sprinter";
import { Swimmer } from "./athletes/swimmer";
import { Competition } from "./competition";

const competinion = new Competition("fr14", "2023.09.20", "KLaipeda");
const athlete1 = new MarathonRunner("Mr25", "Joe Doe", "28", 23);
const athlete2 = new Spinter("sp01", "Joe Joes", "25", 10, 23);
const athlete3 = new Swimmer("sw01", "Julius Bačkulis", "24", "peteliškė", 42);
competinion.registerAthlete(athlete1);
competinion.registerAthlete(athlete2);
competinion.registerAthlete(athlete3);

// console.log(athlete2);
competinion.startCompetition();
