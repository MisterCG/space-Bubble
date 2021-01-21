import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionsComponent } from './pages/missions/missions.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { LaunchesComponent } from './pages/launches/launches.component'; 
import { RocketsComponent } from './pages/rockets/rockets.component';

const routes: Routes = [
    { path: 'missions', component: MissionsComponent },
    { path: 'historic', component: HistoricComponent },
    { path: 'launches', component: LaunchesComponent },
    { path: 'rockets', component: RocketsComponent }
];



@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class SpaceXRoutesModule {}