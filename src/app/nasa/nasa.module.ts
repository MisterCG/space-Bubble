import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaRoutesModule } from './nasa.routes';
import { LibraryComponent } from './pages/library/library.component';


@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    NasaRoutesModule
  ]
})
export class NasaModule { }
