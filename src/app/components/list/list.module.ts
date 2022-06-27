import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ListComponent],
  bootstrap: [ListComponent]
})
export class ListModule { }
