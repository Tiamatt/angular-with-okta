import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaCallbackComponent } from '@okta/okta-angular';
// custom objects
import { MyProtectedComponent } from './my-protected/my-protected.component';

const CALLBACK_PATH = 'implicit/callback';

const routes: Routes = [
  {
    path: CALLBACK_PATH,
    component: OktaCallbackComponent,
  },
  {
    path: 'my-protected',
    component: MyProtectedComponent,
    canActivate: [ OktaAuthGuard ],
  },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
