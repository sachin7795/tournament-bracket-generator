import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertModalComponent } from 'src/app/components/confirm-alert-modal/confirm-alert-modal.component';
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

    constructor(private playersService: PlayersService,
        private dialog: MatDialog) {}

    ngOnInit() {
        this.headers = ["First Name", "Last Name", "Birth Date", "Gender", "Team"];
        this.getPlayers();
    }

    getPlayers() {
        this.players = [];
        this.data = [];
        this.playersService.getPlayers().subscribe(
            (res) => {
                this.players = <Player[]>res;
                this.players.forEach(c=>{
                   let obj = {metaData: c, tableData:[c.firstName,c.lastName,c.birthDate,c.gender,c.team?.name]}
                   this.data.push(obj);
                });
            },
            (err) => {
                console.log(err);
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

    addOrUpdatePlayer(player: Player) {
        if(player.id){
            this.playersService.updatePlayer(player).subscribe(
                (success) => {
                    console.log('Player Updated Successfully');
                    this.getPlayers();
                },
                (err) => {
                    console.log('Unable to update player');
                }
            )
        } else {
            player.id = UtilityFunctions.generateUuid();
            this.playersService.addPlayer(player).subscribe(
                (success) => {
                    console.log('Player Added Successfully');
                    this.getPlayers();
                },
                (err) => {
                    console.log('Unable to add player');
                }
            )
        }
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
        let dialogRef1 = this.dialog.open(ConfirmAlertModalComponent, {
            data: { head:'Delete Player', body: `Are you sure you want to delete ${row.metaData.firstName + ' ' + row.metaData.lastName}`, isConfirm: true },
            height: '200px',
            width: '400px',
            disableClose: true
          });
        dialogRef1.afterClosed().subscribe((data:any) => {
          data = JSON.parse(data);
          if(data.yes) {
            this.playersService.deletePlayer(row.metaData.id).subscribe(
                (success) => {
                    console.log('Player Deleted Successfully');
                    this.getPlayers();
                },
                (err) => {
                    console.log('Unable to delete player');
                }
            )
          }
        });
    }

}
