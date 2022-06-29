import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatchDetails } from 'src/app/models/match-details.model';
import { MatchDetailsService } from 'src/app/services/match-details.service';

@Component({
  selector: 'match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent {

    matchDetails: MatchDetails = new MatchDetails();
    load: boolean = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatchDetailsComponent>,
    private matchDetailsService: MatchDetailsService) {}

    ngOnInit() {
        this.matchDetailsService.getMatchDetails(this.data.id).subscribe(
            (res) => {
                this.matchDetails = <MatchDetails>res;
                this.load = true;
            },
            (err) => {
                console.log(err);
            }
        )
    }

    close() {
        this.dialogRef.close(JSON.stringify({close: true}));
    }
}
