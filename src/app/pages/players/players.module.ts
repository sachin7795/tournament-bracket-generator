import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { FormsModule } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';
import { ListModule } from 'src/app/components/list/list.module';

@NgModule({
  declarations: [
    PlayersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlayersRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ListModule
  ],
  providers: [PlayersService],
  bootstrap: [PlayersComponent]
})
export class PlayersModule { }
