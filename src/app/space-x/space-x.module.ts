import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpaceXRoutesModule }from './spacex.routes';
import { MissionsComponent } from './pages/missions/missions.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketsComponent } from './pages/rockets/rockets.component';


@NgModule({
  declarations: [
    MissionsComponent,
    HistoricComponent,
    LaunchesComponent,
    RocketsComponent
  ],
  imports: [
    CommonModule,
    SpaceXRoutesModule,
    HttpClientModule
  ]
})
export class SpaceXModule { }
