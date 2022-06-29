import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
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
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MatchDetailsComponent>,
    private matchDetailsService: MatchDetailsService,
    private _snackBar: MatSnackBar) {}

    ngOnInit() {
        this.matchDetailsService.getMatchDetails(this.data.id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
            (res) => {
                this.matchDetails = <MatchDetails>res;
                this.load = true;
            },
            (err) => {
                console.log(err);
                this._snackBar.open('Unable to fetch match details', 'Close', {
                    duration: 3000,
                });
            }
        )
    }

    close() {
        this.dialogRef.close(JSON.stringify({close: true}));
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
