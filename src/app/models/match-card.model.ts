import { Team } from "./team.model";

export class MatchCard {
    matchNumber: number = 0;
    stage: string = 'Round of 16';
    date: Date = new Date();
    status: string = 'Pending';
    teamOne?: Team = new Team();
    teamTwo?: Team = new Team();
    penalty?: Penalty = new Penalty();
}

export class Penalty {
    totalPenalties: number = 0;
}