import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { RootComponent } from './modules/root/root.component';
import { HomeComponent } from './modules/home/home.component';
import { StarredComponent } from './modules/starred/starred.component';
import { AuthGuardService } from './services/auth-guard.service';

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
        canActivate: [AuthGuardService]
      },
      {
        path: 'starred',
        component: StarredComponent,
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'starred',
    component: RootComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
