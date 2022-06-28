import { Component } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayersService } from 'src/app/services/players.service';
import { UtilityFunctions } from 'src/app/utilities/utility-functions';

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
        if(player.id){
            let index = this.players.findIndex(c=>c.id==this.orgPlayer.id);
            if(index>-1) {
                this.players.splice(index, 1)
            }
            let index2 = this.data.findIndex(c=>c.metaData.id==this.orgPlayer.id);
            if(index>-1) {
                this.data.splice(index2, 1)
            }
        } else {
            player.id = UtilityFunctions.generateUuid();
        }
        this.players.unshift(player);
        this.data.unshift({metaData: player, tableData:[player.firstName,player.lastName,player.birthDate,player.gender,player.team?.name]});
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
        this.data = this.data.filter(c=>c.metaData.id!=row.metaData.id);
    }

}
