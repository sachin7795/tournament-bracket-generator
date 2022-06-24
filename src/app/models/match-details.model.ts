export class MatchDetails {
    tournamentName: string = '';
    date: Date = new Date('');
    status: string = '';
    stage: string = '';
    teamOne: TeamDetails = new TeamDetails();
    teamTwo: TeamDetails = new TeamDetails();
}

export class TeamDetails {
    name: string = '';
    flag: string = '';
    score: number = 0;
    rank: number = 0;
    stats: Statistics = new Statistics();
}

export class Statistics {
    shots: number = 0;
    shotsOnTarget: number = 0;
    possession: string = '';
    passes: number = 0;
    passAccuracy: string = '';
    fouls: number = 0;
    yellowCards: number = 0;
}