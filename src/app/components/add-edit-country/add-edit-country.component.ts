import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.scss']
})
export class AddEditCountryComponent {

    @Input('country') country: Country = new Country();
    @Input('isAdd') isAdd: boolean = true;
    @Output('updatedCountry') updatedCountry: EventEmitter<Country> = new EventEmitter();

    constructor() {}

    addCountry() {
      this.updatedCountry.emit(this.country);
      this.country = new Country();
    }

}
