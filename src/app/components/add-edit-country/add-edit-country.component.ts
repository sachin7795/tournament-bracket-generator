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
    showError: boolean = false;
    errorMsg: string = '';

    constructor() {}

    addCountry() {
      this.errorMsg = '';
      this.showError = false;
      if(this.country.name && this.country.name.trim()!='' && this.country.rank && this.country.rank!=0) {
        this.updatedCountry.emit(this.country);
        this.country = new Country();
      } else {
        this.showError = true;
        if(this.country.rank==0) {
          this.errorMsg = "Rank cannot be 0";
        } else {
          this.errorMsg = "Please fill required fields";
        }
      }
    }

}
