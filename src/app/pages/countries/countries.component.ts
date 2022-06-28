import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { UtilityFunctions } from 'src/app/utilities/utility-functions';

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
    data: any[] = [];
    headers: string[] = [];

    constructor(private countriesService: CountriesService) {}

    ngOnInit() {
        this.countries = this.countriesService.getCountries();
        this.countries.forEach(c=>{
           let obj = {metaData: c, tableData:[c.name,c.rank]}
           this.data.push(obj);
        });
        this.headers = ["Name", "Rank"];
    }

    showAdd() {
        this.addEditFormVisible = true;
        this.isAdd = true;
    }

    hideAdd() {
        this.addEditFormVisible = false;
    }

    addOrUpdateCountry(country: Country) {
        if(country.id) {
            let index = this.countries.findIndex(c=>c.id==this.orgCountry.id);
            if(index>-1) {
                this.countries.splice(index, 1)
            } 
            let index2 = this.data.findIndex(c=>c.metaData.id==this.orgCountry.id);
            if(index>-1) {
                this.data.splice(index2, 1)
            }
        } else {
            this.country.id = UtilityFunctions.generateUuid();
        }
        this.countries.unshift(country);
        this.data.unshift({metaData: country, tableData:[country.name,country.rank]});
        this.addEditFormVisible = false;
        this.isAdd = true;
        this.country = new Country();
        this.orgCountry = new Country();
    }

    editCountry(row: any) {
        this.orgCountry = {...row.metaData};
        this.country = {...row.metaData};
        this.isAdd = false;
        this.addEditFormVisible = true;
    }

    deleteCountry(row: any) {
        this.countries = this.countries.filter(c=>c.id!=row.metaData.id);
        this.data = this.data.filter(c=>c.metaData.id!=row.metaData.id);
    }
}
