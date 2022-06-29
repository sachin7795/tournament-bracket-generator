import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Season } from "src/app/models/season.model";
import { UtilityFunctions } from "src/app/utilities/utility-functions";

@Component({
    selector: 'add-season',
    templateUrl: './add-season.component.html',
    styleUrls: ['./add-season.component.scss']
})

export class AddSeasonComponent {

    season: Season = new Season();

    constructor(public dialogRef: MatDialogRef<AddSeasonComponent>) {}

    generateSeason() {
        this.season.id = UtilityFunctions.generateUuid();
        this.season.status = 'Inprogress';
        this.dialogRef.close(JSON.stringify(this.season));
    }

    close() {
        this.dialogRef.close(JSON.stringify({close: true}));
    }

}