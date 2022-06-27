import { TeamDetails } from "./team-details.model";

export class MatchDetails {
    tournamentName: string = '';
    date: Date = new Date('');
    status: string = '';
    stage: string = '';
    teamOne: TeamDetails = new TeamDetails();
    teamTwo: TeamDetails = new TeamDetails();
}