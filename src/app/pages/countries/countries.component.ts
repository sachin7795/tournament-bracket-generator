import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmAlertModalComponent } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.component';
import { Country } from 'src/app/models/country.model';
import { CountriesService } from 'src/app/services/countries.service';
import { UtilityFunctions } from 'src/app/utilities/utility-functions';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

    addEditFormVisible: boolean = false;
    isAdd: boolean = true;
    country: Country = new Country();
    orgCountry: Country = new Country();
    countries: Country[] = [];
    data: any[] = [];
    headers: string[] = [];

    constructor(private countriesService: CountriesService,
                private dialog: MatDialog,
                private _snackBar: MatSnackBar) {}

    ngOnInit() {
        this.headers = ["Name", "Rank"];
        this.getCountries();
    }

    getCountries() {
        this.countries = [];
        this.data = [];
        this.countriesService.getCountries().subscribe(
            (res) => {
                this.countries = <Country[]>res;
                this.countries.forEach(c=>{
                   let obj = {metaData: c, tableData:[c.name,c.rank]}
                   this.data.push(obj);
                });
            },
            (err) => {
                console.log(err);
                this._snackBar.open('Unable to fetch countries', 'Close', {
                    duration: 3000,
                });
            }
        )
    }

    showAdd() {
        this.addEditFormVisible = true;
        this.isAdd = true;
    }

    hideAdd() {
        this.addEditFormVisible = false;
    }

    addOrUpdateCountry(country: Country) {
        if(country.id) {
            this.countriesService.updateCountry(country).subscribe(
                (success) => {
                    this._snackBar.open('Country Updated Successfully', 'Close', {
                        duration: 3000,
                    });
                    this.getCountries();
                },
                (err) => {
                    console.log(err);
                    this._snackBar.open('Unable to update country', 'Close', {
                        duration: 3000,
                    });
                }
            )
        } else {
            this.country.id = UtilityFunctions.generateUuid();
            this.countriesService.addCountry(country).subscribe(
                (success) => {
                    this._snackBar.open('Country Added Successfully', 'Close', {
                        duration: 3000,
                    });
                    this.getCountries();
                },
                (err) => {
                    console.log(err);
                    this._snackBar.open('Unable to add country', 'Close', {
                        duration: 3000,
                    });
                }
            )
        }
        this.addEditFormVisible = false;
        this.isAdd = true;
        this.country = new Country();
        this.orgCountry = new Country();
    }

    editCountry(row: any) {
        this.orgCountry = {...row.metaData};
        this.country = {...row.metaData};
        this.isAdd = false;
        this.addEditFormVisible = true;
    }

    deleteCountry(row: any) {
        let dialogRef1 = this.dialog.open(ConfirmAlertModalComponent, {
            data: { head:'Delete Country', body: `Are you sure you want to delete ${row.metaData.name}`, isConfirm: true },
            height: '200px',
            width: '400px',
            disableClose: true
          });
        dialogRef1.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          if(data.yes) {
            this.countriesService.deleteCountry(row.metaData.id).subscribe(
                (success) => {
                    this._snackBar.open('Country Deleted Successfully', 'Close', {
                        duration: 3000,
                    });
                    this.getCountries();
                },
                (err) => {
                    console.log(err);
                    this._snackBar.open('Unable to delete country', 'Close', {
                        duration: 3000,
                    });
                }
            )
          }
        });
    }
}
