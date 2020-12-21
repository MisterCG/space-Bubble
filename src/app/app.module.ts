import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AuthViewComponent } from './view/auth-view/auth-view.component';
import { FeedViewComponent } from './view/feed-view/feed-view.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    FeedViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
