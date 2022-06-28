import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { Season } from 'src/app/models/season.model';
import { CountriesService } from 'src/app/services/countries.service';
import { SeasonsService } from 'src/app/services/seasons.service';
import { UtilityFunctions } from 'src/app/utilities/utility-functions';

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
        this.seasons = this.seasonsService.getSeasons();
        this.seasons.forEach(c=>{
           let obj = {metaData: c, tableData:[c.name,c.status]}
           this.data.push(obj);
        });
        this.headers = ["Name", "Status"];
    }

    editSeason(row: any) {
        this._route.navigate(['matches-dashboard']);
    }

    viewSeason(row: any) {
        this._route.navigate(['matches-dashboard']);
    }

    deleteSeason(row: any) {
        this.seasons = this.seasons.filter(c=>c.id!=row.metaData.id);
        this.data = this.data.filter(c=>c.metaData.id!=row.metaData.id);
    }

    GenerateNewSeason() {
        this._route.navigate(['matches-dashboard']);
    }
}
