import { Component, Input } from "@angular/core";
import { MatchCard } from "src/app/models/match-card.model";

@Component({
    selector: 'match-card',
    templateUrl: './match-card.component.html',
    styleUrls: ['./match-card.component.scss']
})

export class MatchCardComponent {

    @Input('data') cardData: MatchCard = new MatchCard();

    constructor() {}

    ngOnInit() {}
}