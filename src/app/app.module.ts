import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchDetailsModule } from './pages/match-details/match-details.module';
import { MatchesDashboardModule } from './pages/matches-dashboard/matches-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatchDetailsModule,
    MatchesDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
