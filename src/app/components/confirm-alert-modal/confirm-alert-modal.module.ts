import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmAlertModalComponent } from './confirm-alert-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ConfirmAlertModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ConfirmAlertModalComponent],
  bootstrap: [ConfirmAlertModalComponent]
})
export class ConfirmAlertModalModule { }
