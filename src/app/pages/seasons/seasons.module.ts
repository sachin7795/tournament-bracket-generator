import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { ListModule } from 'src/app/components/list/list.module';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsService } from 'src/app/services/seasons.service';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AddSeasonComponent } from 'src/app/components/add-season/add-season.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmAlertModalModule } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.module';

@NgModule({
  declarations: [
    SeasonsComponent,
    AddSeasonComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    SeasonsRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ConfirmAlertModalModule
  ],
  providers: [SeasonsService],
  bootstrap: [SeasonsComponent]
})
export class SeasonsModule { }
