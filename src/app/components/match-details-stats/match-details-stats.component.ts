import { Component, Input } from "@angular/core";
import { MatchDetails, Statistics } from "src/app/models/match-details.model";

@Component({
    selector: 'match-details-stats',
    templateUrl: './match-details-stats.component.html',
    styleUrls: ['./match-details-stats.component.scss']
})

export class MatchDetailsStatsComponent {

    @Input('data') matchDetails: MatchDetails = new MatchDetails();
    stats: string[] = [];

    constructor() {}

    ngOnInit() {
        this.stats = Object.keys(this.matchDetails.teamOne.stats);
    }

    camelCaseToSpace(str: string): string {
        let result = str.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    objectRead(obj: Statistics, key: string) {
        return (obj as any)[key];
    }
}