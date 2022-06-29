import { Component, Input } from "@angular/core";
import { MatchDetails } from "src/app/models/match-details.model";
import { Statistics } from "src/app/models/statistics.model";

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
        console.log(this.matchDetails);
        this.stats = Object.keys(this.matchDetails.teamOne.stats);
    }

    camelCaseToSpace(str: string): string {
        let result = str.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    objectRead(obj: Statistics, key: string) {
        return key=='passAccuracy' || key=='possession'?(obj as any)[key]+'%':(obj as any)[key];
    }
}