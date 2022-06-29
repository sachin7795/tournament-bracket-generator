import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { FormsModule } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { ListModule } from 'src/app/components/list/list.module';
import { AddEditPlayerComponent } from 'src/app/components/add-edit-player/add-edit-player.component';
import { CountriesService } from 'src/app/services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmAlertModalModule } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    PlayersComponent,
    AddEditPlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlayersRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDialogModule,
    ConfirmAlertModalModule,
    MatSnackBarModule
  ],
  providers: [PlayersService, CountriesService, MatDatepickerModule],
  bootstrap: [PlayersComponent]
})
export class PlayersModule { }
