import { Statistics } from "./statistics.model";

export class TeamDetails {
    name: string = '';
    flag: string = '';
    score: number = 0;
    rank: number = 0;
    stats: Statistics = new Statistics();
    penaltyScore?: number = 0;
}