import { MatchCard } from "./match-card.model";

export class Tournament {
    id: string = '';
    name: string = '';
    status: string = '';
    roundOf16: MatchCard[] = [];
    quarterFinals: MatchCard[] = [];
    semiFinals: MatchCard[] = [];
    final: MatchCard = new MatchCard();
}