import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { RootComponent } from './modules/root/root.component';
import { HomeComponent } from './modules/home/home.component';
import { StarredComponent } from './modules/starred/starred.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AlbumViewComponent } from './modules/album-view/album-view.component';
import { AlbumListComponent } from './modules/album-list/album-list.component';
import { SharedComponent } from './modules/shared/shared.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: ':album',
            component: AlbumViewComponent
          },
          {
            path: '',
            component: AlbumListComponent
          },

        ]
      },
      {
        path: 'shared',
        component: SharedComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: ':album',
            component: AlbumViewComponent
          },
          {
            path: '',
            component: AlbumListComponent
          },

        ]
      },
      {
        path: 'starred',
        component: StarredComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
