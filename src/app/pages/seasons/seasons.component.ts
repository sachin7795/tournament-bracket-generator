import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
        private _route: Router) {}

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
        this.seasons = this.seasons.filter(c=>c.id!=row.metaData.id);
        this.data = this.data.filter(c=>c.metaData.id!=row.metaData.id);
    }

    GenerateNewSeason() {
        this._route.navigate(['matches-dashboard']);
    }
}
