import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaCallbackComponent } from '@okta/okta-angular';
// custom objects
import { LogInComponent, SignUpComponent } from './auth/index';
import { DashboardComponent, WelcomeComponent } from './main/index';
import { UserDetailsComponent, UserBioComponent } from './user-profile/index';

const CALLBACK_PATH = 'implicit/callback';

const routes: Routes = [
  {
    path: CALLBACK_PATH,
    component: OktaCallbackComponent,
  },
  // main section
  { path: '', pathMatch: 'full', redirectTo: '/welcome'},
  { path: 'welcome', component: WelcomeComponent, },
  { path: 'dashboard', component: DashboardComponent, },
  // auth section
  { path: 'log-in', component: LogInComponent, },
  { path: 'sign-up', component: SignUpComponent, },
  // user-profile section
  { path: 'user-details', component: UserDetailsComponent, canActivate: [OktaAuthGuard], },
  { path: 'user-bio', component: UserBioComponent, canActivate: [OktaAuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
