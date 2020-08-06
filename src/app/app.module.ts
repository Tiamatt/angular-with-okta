import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OKTA_CONFIG,OktaAuthModule, } from '@okta/okta-angular';
// core custom objects
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// custom objects
import { LogInComponent, SignUpComponent } from './auth/index';
import { DashboardComponent, WelcomeComponent } from './main/index';
import { UserDetailsComponent, UserBioComponent } from './user-profile/index';

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
    LogInComponent, SignUpComponent,
    DashboardComponent, WelcomeComponent,
    UserDetailsComponent, UserBioComponent,
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
