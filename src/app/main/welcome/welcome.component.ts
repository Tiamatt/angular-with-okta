import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  public userName: string;
  public isAuthenticated: boolean;

  constructor(
    public oktaAuthService: OktaAuthService,
  ) { }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuthService.getUser();
      this.userName = userClaims.name;
    }
  }

  public onLogout() {
    this.oktaAuthService.logout('/welcome');
  }
}
