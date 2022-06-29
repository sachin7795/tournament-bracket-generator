import { TeamDetails } from "./team-details.model";

export class MatchDetails {
    id?: string = '';
    tournamentName: string = '';
    date: Date = new Date('');
    status: string = '';
    stage: string = '';
    teamOne: TeamDetails = new TeamDetails();
    teamTwo: TeamDetails = new TeamDetails();
    totalPenalty?: number = 0;
}