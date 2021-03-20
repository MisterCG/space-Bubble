import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FeedViewComponent } from './view/feed-view/feed-view.component';

const routes: Routes = [
  { path: '', component: FeedViewComponent, children: [
      { 
        path: '', 
        loadChildren: () => import('./feed/feed.module').then( m => m.FeedModule ) 
      },
      {
        path: 'nasa',
        loadChildren: () => import('./nasa/nasa.module').then( m => m.NasaModule )
      },
      { 
        path: 'spaceX',
        loadChildren: () => import('./space-x/space-x.module').then( m => m.SpaceXModule )
      }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'feed' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, {
      // preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
