import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(public oktaAuthService: OktaAuthService) {
    // Subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe(
      (isAuthenticated: boolean) => { 
        this.isAuthenticated = isAuthenticated;
      }
    );
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
  }

  public onLogin() {
    this.oktaAuthService.loginRedirect('/sign-up');
  }

  public onLogout() { }

}
