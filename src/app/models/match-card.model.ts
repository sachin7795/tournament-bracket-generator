export class MatchCard {
    matchNumber: number = 0;
    stage: string = 'Round of 16';
    date: Date = new Date();
    status: string = 'Pending';
    teamOne?: Team = new Team();
    teamTwo?: Team = new Team();
    penalty?: Penalty = new Penalty();
}

export class Team {
    name: string = '';
    flag: string = 'flag_circle';
    rank: number = 0;
    isWinner: boolean = false;
    score?: number = 0;
    penaltyScore?: number = 0;
}

export class Penalty {
    totalPenalties: number = 0;
}