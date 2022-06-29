import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'confirm-alert-modal',
    templateUrl: './confirm-alert-modal.component.html',
    styleUrls: ['./confirm-alert-modal.component.scss']
})

export class ConfirmAlertModalComponent {

    head: string = '';
    body: string = '';
    isConfirm: boolean = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmAlertModalComponent>) {}

    ngOnInit() {
        this.isConfirm = this.data.isConfirm;
        this.head = this.data.head;
        this.body = this.data.body;
    }

    ok() {
        this.dialogRef.close(JSON.stringify({ok: true}));
    }

    yes() {
        this.dialogRef.close(JSON.stringify({yes: true}));
    }

    no() {
        this.dialogRef.close(JSON.stringify({no: true}));
    }
}