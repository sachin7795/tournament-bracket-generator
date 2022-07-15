import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatchDetails } from 'src/app/models/match-details.model';

@Component({
    selector: 'update-match-card',
    templateUrl: './update-match-card.component.html',
    styleUrls: ['./update-match-card.component.scss']
})

export class UpdateMatchCardComponent {

    matchDetails: MatchDetails = new MatchDetails();
    showError: boolean = false;
    errorMsg: string = '';

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateMatchCardComponent>) {}

    ngOnInit() {
        this.matchDetails.tournamentName = this.data.name;
        this.matchDetails.stage = this.data.content.stage;
        this.matchDetails.status = this.data.content.status;
        this.matchDetails.id = this.data.content.id;
        this.matchDetails.teamOne.flag = this.data.content.teamOne.flag;
        this.matchDetails.teamOne.name = this.data.content.teamOne.name;
        this.matchDetails.teamOne.rank = this.data.content.teamOne.rank;
        this.matchDetails.teamTwo.flag = this.data.content.teamTwo.flag;
        this.matchDetails.teamTwo.name = this.data.content.teamTwo.name;
        this.matchDetails.teamTwo.rank = this.data.content.teamTwo.rank;
    }

    cancel() {
        this.dialogRef.close(JSON.stringify({cancel: true}));
    }

    save() {
        this.showError = false;
        if(this.validateForm()) {
            this.dialogRef.close(JSON.stringify({save: true, data: {...this.matchDetails}}));
        } else {
            this.showError = true;
        }
    }

    validateForm() {
        this.errorMsg = '';
        if(!this.matchDetails.date || (this.matchDetails.date && ((new Date(this.matchDetails.date)+'')=='Invalid Date')) ||
            (!this.matchDetails.teamOne.score && this.matchDetails.teamOne.score!=0) ||
            (!this.matchDetails.teamOne.stats.fouls && this.matchDetails.teamOne.stats.fouls!=0) ||
            (!this.matchDetails.teamOne.stats.passAccuracy && this.matchDetails.teamOne.stats.passAccuracy!=0) ||
            (!this.matchDetails.teamOne.stats.passes && this.matchDetails.teamOne.stats.passes!=0) ||
            (!this.matchDetails.teamOne.stats.possession && this.matchDetails.teamOne.stats.possession!=0) ||
            (!this.matchDetails.teamOne.stats.shots && this.matchDetails.teamOne.stats.shots!=0) ||
            (!this.matchDetails.teamOne.stats.shotsOnTarget && this.matchDetails.teamOne.stats.shotsOnTarget!=0) ||
            (!this.matchDetails.teamOne.stats.yellowCards && this.matchDetails.teamOne.stats.yellowCards!=0) ||
            (!this.matchDetails.teamTwo.score && this.matchDetails.teamTwo.score!=0) ||
            (!this.matchDetails.teamTwo.stats.fouls && this.matchDetails.teamTwo.stats.fouls!=0) ||
            (!this.matchDetails.teamTwo.stats.passAccuracy && this.matchDetails.teamTwo.stats.passAccuracy!=0) ||
            (!this.matchDetails.teamTwo.stats.passes && this.matchDetails.teamTwo.stats.passes!=0) ||
            (!this.matchDetails.teamTwo.stats.possession && this.matchDetails.teamTwo.stats.possession!=0) ||
            (!this.matchDetails.teamTwo.stats.shots && this.matchDetails.teamTwo.stats.shots!=0) ||
            (!this.matchDetails.teamTwo.stats.shotsOnTarget && this.matchDetails.teamTwo.stats.shotsOnTarget!=0) ||
            (!this.matchDetails.teamTwo.stats.yellowCards && this.matchDetails.teamTwo.stats.yellowCards!=0)) {
                this.errorMsg = 'Please fill require fields';
                return false;
            } else {
                if(this.matchDetails.teamOne.score<0 || this.matchDetails.teamOne.stats.fouls<0 ||
                    this.matchDetails.teamOne.stats.passAccuracy<0 || this.matchDetails.teamOne.stats.passes<0 ||
                    this.matchDetails.teamOne.stats.possession<0 || this.matchDetails.teamOne.stats.shots<0 ||
                    this.matchDetails.teamOne.stats.shotsOnTarget<0 || this.matchDetails.teamOne.stats.yellowCards<0 ||
                    this.matchDetails.teamTwo.score<0 || this.matchDetails.teamTwo.stats.fouls<0 ||
                    this.matchDetails.teamTwo.stats.passAccuracy<0 || this.matchDetails.teamTwo.stats.passes<0 ||
                    this.matchDetails.teamTwo.stats.possession<0 || this.matchDetails.teamTwo.stats.shots<0 ||
                    this.matchDetails.teamTwo.stats.shotsOnTarget<0 || this.matchDetails.teamTwo.stats.yellowCards<0) {
                    this.errorMsg = "values can't be negative";
                    return false;
                } else if(((this.matchDetails.teamOne.score===this.matchDetails.teamTwo.score))) {
                    if((this.matchDetails.teamOne.penaltyScore==undefined || this.matchDetails.teamOne.penaltyScore==null) ||
                    (this.matchDetails.teamTwo.penaltyScore==undefined || this.matchDetails.teamTwo.penaltyScore==null)) {
                        this.errorMsg = 'Penalty can not be empty';
                        return false;
                    } else if(this.matchDetails.teamOne.penaltyScore == this.matchDetails.teamTwo.penaltyScore) {
                        this.errorMsg = 'Penalty can not be equal';
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            }
    }

    scoreEntered(){
        this.matchDetails.totalPenalty = this.matchDetails.teamOne.penaltyScore = this.matchDetails.teamTwo.penaltyScore = 0;
    }

}