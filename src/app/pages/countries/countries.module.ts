import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { AddEditCountryComponent } from 'src/app/components/add-edit-country/add-edit-country.component';
import { CountriesService } from 'src/app/services/countries.service';
import { ListModule } from 'src/app/components/list/list.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
import { ConfirmAlertModalModule } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    CountriesComponent,
    AddEditCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ListModule,
    CountriesRoutingModule,
    ConfirmAlertModalModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [CountriesService],
  bootstrap: [CountriesComponent]
})
export class CountriesModule { }
