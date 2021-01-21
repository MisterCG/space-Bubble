import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './pages/library/library.component';
import { ApodTodayComponent } from './pages/apod-today/apod-today.component';
import { AsteroidNearComponent } from './pages/asteroid-near/asteroid-near.component';
import { AsteroidBrowseComponent } from './pages/asteroid-browse/asteroid-browse.component';

const routes: Routes = [
    { path: 'library', component: LibraryComponent },
    { path: 'apodoftoday', component: ApodTodayComponent },
    { path: 'asteroidbrowse', component: AsteroidBrowseComponent },
    { path: 'asteroidnear', component: AsteroidNearComponent }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class NasaRoutesModule {}