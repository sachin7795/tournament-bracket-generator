import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {

    @Input('countries') countries: Country[] = [];
    @Output('edit') edit: EventEmitter<Country> = new EventEmitter();

    constructor() {}

    editCountry(country: Country) {
      this.edit.emit(country);
    }

    deleteCountry(country: Country) {
        this.countries = this.countries.filter(c=>c.name!=country.name && c.rank!=country.rank)
    }

}
