import { Team } from "./team.model";

export class Player {
    firstName: string = '';
    lastName: string = '';
    gender: string = '';
    birthDate!: Date;
    team: Team = new Team();
    id?: string;
}