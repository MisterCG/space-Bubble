import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceXRoutesModule }from './spacex.routes';
import { MissionsComponent } from './pages/missions/missions.component';


@NgModule({
  declarations: [
    MissionsComponent
  ],
  imports: [
    CommonModule,
    SpaceXRoutesModule
  ]
})
export class SpaceXModule { }
