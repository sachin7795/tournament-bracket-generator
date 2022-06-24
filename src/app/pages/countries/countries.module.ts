import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesListComponent } from 'src/app/components/countries-list/countries-list.component';
import { AddEditCountryComponent } from 'src/app/components/add-edit-country/add-edit-country.component';
import { FormsModule } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@NgModule({
  declarations: [
    CountriesComponent,
    CountriesListComponent,
    AddEditCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CountriesRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [CountriesService],
  bootstrap: [CountriesComponent]
})
export class CountriesModule { }
