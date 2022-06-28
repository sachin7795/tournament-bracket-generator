import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { ListModule } from 'src/app/components/list/list.module';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsService } from 'src/app/services/seasons.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SeasonsComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    SeasonsRoutingModule,
    MatButtonModule
  ],
  providers: [SeasonsService],
  bootstrap: [SeasonsComponent]
})
export class SeasonsModule { }
