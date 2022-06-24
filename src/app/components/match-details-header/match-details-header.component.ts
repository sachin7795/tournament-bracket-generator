import { Component, Input } from "@angular/core";
import { MatchDetails } from "src/app/models/match-details.model";

@Component({
    selector: 'match-details-header',
    templateUrl: './match-details-header.component.html',
    styleUrls: ['./match-details-header.component.scss']
})

export class MatchDetailsHeaderComponent {

    @Input('data') matchDetails: MatchDetails = new MatchDetails();

    constructor() {}

    ngOnInit() {
    }
}