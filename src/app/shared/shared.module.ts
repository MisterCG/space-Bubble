import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TakeImagePipe } from './pipes/take-image.pipe';



@NgModule({
  declarations: [
    NavComponent, 
    FooterComponent, 
    TakeImagePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent, 
    FooterComponent,
    TakeImagePipe
  ]
})
export class SharedModule { }
