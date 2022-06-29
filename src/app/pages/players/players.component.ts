import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
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
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private playersService: PlayersService,
        private dialog: MatDialog,
        private _snackBar: MatSnackBar) {}

    ngOnInit() {
        this.headers = ["First Name", "Last Name", "Birth Date", "Gender", "Team"];
        this.getPlayers();
    }

    getPlayers() {
        this.players = [];
        this.data = [];
        this.playersService.getPlayers()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
            (res) => {
                this.players = <Player[]>res;
                this.players.forEach(c=>{
                   let obj = {metaData: c, tableData:[c.firstName,c.lastName,c.birthDate,c.gender,c.team?.name]}
                   this.data.push(obj);
                });
            },
            (err) => {
                console.log(err);
                this._snackBar.open('Unable to get players', 'Close', {
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

    addOrUpdatePlayer(player: Player) {
        if(player.id){
            this.playersService.updatePlayer(player)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (success) => {
                    this._snackBar.open('Player Updated Successfully', 'Close', {
                        duration: 3000,
                    });
                    this.getPlayers();
                },
                (err) => {
                    console.log(err);
                    this._snackBar.open('Unable to update player', 'Close', {
                        duration: 3000,
                    });
                }
            )
        } else {
            player.id = UtilityFunctions.generateUuid();
            this.playersService.addPlayer(player)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (success) => {
                    this._snackBar.open('Player Added Successfully', 'Close', {
                        duration: 3000,
                    });
                    this.getPlayers();
                },
                (err) => {
                    console.log(err);
                    this._snackBar.open('Unable to add player', 'Close', {
                        duration: 3000,
                    });
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
        dialogRef1.afterClosed()
        .pipe(takeUntil(this.destroy$))
        .subscribe((data:any) => {
          data = JSON.parse(data);
          if(data.yes) {
            this.playersService.deletePlayer(row.metaData.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (success) => {
                    this._snackBar.open('Player Deleted Successfully', 'Close', {
                        duration: 3000,
                    });
                    this.getPlayers();
                },
                (err) => {
                    console.log(err);
                    this._snackBar.open('Unable to delete player', 'Close', {
                        duration: 3000,
                    });
                }
            )
          }
        });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
