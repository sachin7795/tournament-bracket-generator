import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from 'src/app/models/country.model';
import { Player } from 'src/app/models/player.model';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.scss']
})
export class AddEditPlayerComponent {

    @Input('player') player: Player = new Player();
    @Input('isAdd') isAdd: boolean = true;
    @Output('updatedPlayer') updatedPlayer: EventEmitter<Player> = new EventEmitter();

    teams: Country[] = [];
    showError: boolean = false;
    errorMsg: string = '';

    constructor(private countriesService: CountriesService,
      private _snackBar: MatSnackBar) {}

    ngOnInit() {
      this.countriesService.getCountries().subscribe(
        (res) => {
          this.teams = <Country[]>res;
        },
        (err) => {
          console.log(err);
          this._snackBar.open('Unable to fetch teams', 'Close', {
            duration: 3000,
          });
        }
      );
    }

    addPlayer() {
      if(this.player.firstName && this.player.firstName.trim()!='' &&
      this.player.lastName && this.player.lastName.trim()!='' &&
      this.player.gender && this.player.birthDate && this.player.team.id) {
        let team = this.teams.find(t=>t.id==this.player.team.id);
        if(team) {
          this.player.team.name = team.name;
          this.player.team.rank = team.rank;
          this.player.team.id = <string>team.id;
        }
        this.updatedPlayer.emit(this.player);
        this.player = new Player();
      } else {
        this.showError = true;
        this.errorMsg = "Please fill required fields";
      }
    }

}
