import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
          });
        dialogRef.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          console.log(data.save);
          if(data.save) {
            console.log("here...");
            this.saveMatchDetails(data.data);
          }
        });
      } else if(data.status=="Full-time") {
        console.log('you can not modify the decided match');
      } else {
        console.log('Please decide result for previous match first')
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
