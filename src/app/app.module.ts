import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';
import { MyProtectedComponent } from './my-protected/my-protected.component';


const config = {
  clientId: '{clientId}',
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  redirectUri: 'http://localhost:8080/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    MyProtectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
