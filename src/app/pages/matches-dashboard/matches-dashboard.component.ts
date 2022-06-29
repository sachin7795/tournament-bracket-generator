import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmAlertModalComponent } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.component';
import { MatchDetailsComponent } from 'src/app/components/match-details/match-details.component';
import { UpdateMatchCardComponent } from 'src/app/components/update-match-card/update-match-card.component';
import { MatchDetails } from 'src/app/models/match-details.model';
import { Tournament } from 'src/app/models/tournament.model';
import { MatchesDashboardService } from 'src/app/services/matches-dashboard.service';

@Component({
  selector: 'matches-dashboard',
  templateUrl: './matches-dashboard.component.html',
  styleUrls: ['./matches-dashboard.component.scss']
})
export class MatchesDashboardComponent {
  
    tournamentData: Tournament = new Tournament();

    constructor(private _route: Router, 
                private mdService: MatchesDashboardService,
                private activatedRoute: ActivatedRoute,
                private dialog: MatDialog) {}

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe((obj)=>{
        let id = <string>obj.get('id');
        this.fetchDetails(id);
      });
    }

    fetchDetails(id: string) {
      this.mdService.getSeasonDetails(id).subscribe(
        (res) => {
          this.tournamentData = <Tournament>res;
        },
        (err) => {
          console.log(err);
        }
      )
    }

    openMatchDetails(data: any) { 
      if(data.teamOne.name!='TBD' && data.teamTwo.name !='TBD' && data.status!="Full-time") {
        let dialogRef = this.dialog.open(UpdateMatchCardComponent, {
            data: { name: this.tournamentData.name, content: data},
            height: '980px',
            width: '800px',
            disableClose: true
          });
        dialogRef.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          console.log(data.save);
          if(data.save) {
            this.saveMatchDetails(data.data);
          }
        });
      } else if(data.status=="Full-time") {
        let dialogRef1 = this.dialog.open(MatchDetailsComponent, {
            data: { id: data.id },
            height: '900px',
            width: '1200px',
            disableClose: true
          });
        dialogRef1.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          if(data.close) {
            console.log("close clicked");
          }
        });
      } else {
        let dialogRef2 = this.dialog.open(ConfirmAlertModalComponent, {
            data: { head:'Action Needed', body: 'Please decide result for previous matches first', isConfirm: false },
            height: '200px',
            width: '400px',
            disableClose: true
          });
        dialogRef2.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          if(data.ok) {
            console.log("Ok clicked");
          }
        });
      }
      // this._route.navigate(['match-details']);
    }

    saveSeasonDetails() {
      this.mdService.saveSeasonDetails(this.tournamentData).subscribe(
        (res) => {
          this.ngOnInit();
        },
        (err) => {
          console.log(err);
        }
      )
    }

    saveMatchDetails(matchDetails: MatchDetails) {
      matchDetails.status = 'Full-time';
      this.mdService.saveMatchDetails(matchDetails).subscribe(
        (res) => {
          this.ngOnInit();
        },
        (err) => {
          console.log(err);
        }
      )
    }

}
