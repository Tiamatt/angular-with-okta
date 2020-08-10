import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  public userName: string;

  constructor(
    public oktaAuthService: OktaAuthService,
  ) { }

  async ngOnInit() {
    // returns an array of claims
    const userClaims = await this.oktaAuthService.getUser();

    console.log({'kaliLog': userClaims});

    // user name is exposed directly as property
    this.userName = userClaims.name;
  }

}
