import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG,OktaAuthModule, } from '@okta/okta-angular';
// core custom objects
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// custom objects
import { LogInComponent, SignUpComponent } from './auth/index';
import { DashboardComponent, WelcomeComponent } from './main/index';
import { UserDetailsComponent, UserBioComponent } from './user-profile/index';

const config = {
  clientId: 'xxxxxxxxxxxxx',
  issuer: 'https://dev-xxxxxx.okta.com/oauth2/default',
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
    HttpClientModule, // for HttpClient, should go after BrowserModule
    AppRoutingModule,
    OktaAuthModule // for Okta
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
