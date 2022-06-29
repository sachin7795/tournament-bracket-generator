import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddSeasonComponent } from 'src/app/components/add-season/add-season.component';
import { ConfirmAlertModalComponent } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.component';
import { Season } from 'src/app/models/season.model';
import { SeasonsService } from 'src/app/services/seasons.service';

@Component({
  selector: 'seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {

    seasons: Season[] = [];
    data: any[] = [];
    headers: string[] = [];

    constructor(private seasonsService: SeasonsService,
        private _route: Router,
        private dialog: MatDialog,
        private _snackBar: MatSnackBar) {}

    ngOnInit() {
        this.headers = ["Name", "Status"];
        this.getSeasons();
    }

    getSeasons() {
        this.seasons = [];
        this.data = [];
        this.seasonsService.getSeasons().subscribe(
            (res) => {
                this.seasons = <Season[]>res;
                this.seasons.forEach(c=>{
                let obj = {metaData: c, tableData:[c.name,c.status]}
                this.data.push(obj);
                });
            },
            (err) => {
                console.log(err);
                this._snackBar.open('Unable to get seasons', 'Close', {
                    duration: 3000,
                });
            }
        )
    }

    editSeason(row: any) {
        this._route.navigate(['matches-dashboard/'+row.metaData.id]);
    }

    viewSeason(row: any) {
        this._route.navigate(['matches-dashboard/'+row.metaData.id]);
    }

    deleteSeason(row: any) {
        let dialogRef1 = this.dialog.open(ConfirmAlertModalComponent, {
            data: { head:'Delete Season', body: `Are you sure you want to delete ${row.metaData.name}`, isConfirm: true },
            height: '200px',
            width: '400px',
            disableClose: true
          });
        dialogRef1.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          if(data.yes) {
              this.seasonsService.deleteSeason(row.metaData.id).subscribe(
                  (success) => {
                      this.getSeasons();
                    this._snackBar.open('Season deleted successfully', 'Close', {
                        duration: 3000,
                    });
                  },
                  (err) => {
                      console.log(err);
                      this._snackBar.open('Unable to delete season', 'Close', {
                        duration: 3000,
                      });
                  }
              )
          }
        });
    }

    GenerateNewSeason() {
        let dialogRef = this.dialog.open(AddSeasonComponent, {
            height: '200px',
            width: '400px',
            disableClose: true
          });
        dialogRef.afterClosed().subscribe(season => {
         let s = JSON.parse(season)
         !s.close && this.addSeason(s);
        });
    }

    addSeason(season: Season) {
        this.seasonsService.addSeason(season).subscribe(
            (res) => {
                this._route.navigateByUrl('/matches-dashboard/'+(<any>res).id);
            },
            (err) => {
                console.log(err);
                this._snackBar.open('Unable to add new season', 'Close', {
                    duration: 3000,
                });
            }
        )
    }

}
