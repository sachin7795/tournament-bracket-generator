import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddSeasonComponent } from 'src/app/components/add-season/add-season.component';
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
        private dialog: MatDialog) {}

    ngOnInit() {
        this.seasonsService.getSeasons().subscribe(
            (res) => {
                this.seasons = <Season[]>res;
                this.seasons.forEach(c=>{
                let obj = {metaData: c, tableData:[c.name,c.status]}
                this.data.push(obj);
                });
                this.headers = ["Name", "Status"];
            },
            (err) => {
                console.log(err);
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
        this.seasonsService.deleteSeason(row.metaData.id).subscribe(
            (success) => {
                this.seasons = this.seasons.filter(c=>c.id!=row.metaData.id);
                this.data = this.data.filter(c=>c.metaData.id!=row.metaData.id);
            },
            (err) => {
                console.log(err);
            }
        )
    }

    GenerateNewSeason() {
        let dialogRef = this.dialog.open(AddSeasonComponent, {
            height: '200px',
            width: '400px',
          });
        dialogRef.afterClosed().subscribe(season => {
         this.addSeason(JSON.parse(season));
        });
    }

    addSeason(season: Season) {
        this.seasonsService.addSeason(season).subscribe(
            (res) => {
                this._route.navigateByUrl('/matches-dashboard/'+(<any>res).id);
            },
            (err) => {
                console.log(err);
            }
        )
    }

}
