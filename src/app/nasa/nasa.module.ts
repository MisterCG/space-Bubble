import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NasaRoutesModule } from './nasa.routes';
import { LibraryComponent } from './pages/library/library.component';
import { ApodTodayComponent } from './pages/apod-today/apod-today.component';
import { AsteroidNearComponent } from './pages/asteroid-near/asteroid-near.component';
import { AsteroidBrowseComponent } from './pages/asteroid-browse/asteroid-browse.component';
import { ImageNotFoundPipe } from './pipes/image-not-found.pipe';


@NgModule({
  declarations: [
    LibraryComponent, 
    ApodTodayComponent, 
    AsteroidNearComponent, 
    AsteroidBrowseComponent, ImageNotFoundPipe
  ],
  imports: [
    CommonModule,
    NasaRoutesModule,
    HttpClientModule
  ]
})
export class NasaModule { }
