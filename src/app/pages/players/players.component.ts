import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

    addEditFormVisible: boolean = false;
    isAdd: boolean = true;
    player: Player = new Player();
    orgPlayer: Player = new Player();
    players: Player[] = [];
    data: any[] = [];
    headers: string[] = [];

    constructor(private countriesService: PlayersService) {}

    ngOnInit() {
        this.players = this.countriesService.getPlayers();
        this.players.forEach(c=>{
           let obj = {metaData: c, tableData:[c.firstName,c.lastName,c.birthDate,c.gender,c.team?.name]}
           this.data.push(obj);
        });
        this.headers = ["First Name", "Last Name", "Birth Date", "Gender", "Team"];
    }

    showAdd() {
        this.addEditFormVisible = true;
        this.isAdd = true;
    }

    hideAdd() {
        this.addEditFormVisible = false;
    }

    addOrUpdatePlayer(player: Player) {
        let index = this.players.findIndex(c=>c.firstName==this.orgPlayer.firstName 
            && c.lastName==this.orgPlayer.lastName
            && c.birthDate==this.orgPlayer.birthDate
            && c.gender==this.orgPlayer.gender);
        if(index>-1) {
            this.players.splice(index, 1)
        }
        this.orgPlayer.firstName 
        && this.orgPlayer.lastName
        && this.orgPlayer.birthDate
        && this.orgPlayer.gender && this.players.unshift(player);
        this.addEditFormVisible = false;
        this.isAdd = true;
        this.player = new Player();
        this.orgPlayer = new Player();
    }

    editPlayer(row: any) {
        this.orgPlayer = {...row.metaData};
        this.player = {...row.metaData};
        this.isAdd = false;
        this.addEditFormVisible = true;
    }

    deletePlayer(row: any) {
        this.players = this.players.filter(c=>c.id!=row.metaData.id);
    }

}
