import { Component, Input } from "@angular/core";
import { Team } from "src/app/models/match-card.model";

@Component({
    selector: 'match-card-team-row',
    templateUrl: './match-card-team-row.component.html',
    styleUrls: ['./match-card-team-row.component.scss']
})

export class MatchCardTeamRowComponent {

    @Input('team') team: Team = new Team();

    constructor() {}
}