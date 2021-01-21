import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FeedViewComponent } from './view/feed-view/feed-view.component';
import { AuthViewComponent } from './view/auth-view/auth-view.component';

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
  { path: 'auth', component: AuthViewComponent, children: [
      { 
        path: '',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
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
