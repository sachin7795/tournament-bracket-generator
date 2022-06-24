import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

    addEditFormVisible: boolean = false;
    isAdd: boolean = true;
    country: Country = new Country();
    orgCountry: Country = new Country();
    countries: Country[] = [];

    constructor(private countriesService: CountriesService) {}

    ngOnInit() {
        this.countries = this.countriesService.getCountries();
    }

    showAdd() {
        this.addEditFormVisible = true;
        this.isAdd = true;
    }

    hideAdd() {
        this.addEditFormVisible = false;
    }

    addOrUpdateCountry(country: Country) {
        let index = this.countries.findIndex(c=>c.name==this.orgCountry.name && c.rank==this.orgCountry.rank);
        if(index>-1) {
            this.countries.splice(index, 1)
        }
        this.countries.unshift(country);
        this.addEditFormVisible = false;
        this.isAdd = true;
        this.country = new Country();
        this.orgCountry = new Country();
    }

    editCountry(country: Country) {
        this.orgCountry = {...country};
        this.country = {...country};
        this.isAdd = false;
        this.addEditFormVisible = true;
    }

}
