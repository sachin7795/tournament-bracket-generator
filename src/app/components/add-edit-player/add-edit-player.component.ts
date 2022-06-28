import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    constructor(private countriesService: CountriesService) {}

    ngOnInit() {
      this.teams = this.countriesService.getCountries();
    }

    addPlayer() {
      this.updatedPlayer.emit(this.player);
      this.player = new Player();
    }

}
