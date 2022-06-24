import { MatchCard } from "./match-card.model";

export class Tournament {
    roundOf16: MatchCard[] = [];
    quarterFinals: MatchCard[] = [];
    semiFinals: MatchCard[] = [];
    final: MatchCard = new MatchCard();
}