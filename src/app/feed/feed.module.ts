import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module'
import { FeedRoutesModule } from './feed.routes';
import { FeedComponent } from './pages/feed/feed.component';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    FeedRoutesModule,
    HttpClientModule,
    SharedModule
  ]
})
export class FeedModule { }
