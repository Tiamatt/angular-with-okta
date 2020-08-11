import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
// custom services
import { UserProfileService } from './../user-profile.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit, OnDestroy {
  // public variables
  public userProfileNames: string[] = null;
  // private variables
  private subscriptions = new Subscription();

  constructor(
    private httpClient: HttpClient,
      public oktaAuthService: OktaAuthService,
  ) { }

  private async populateUserProfileNames() {
    this.userProfileNames = null;

    let apiUrl = 'https://localhost:44375/api/userProfile/names';
    const accessToken = await this.oktaAuthService.getAccessToken();
    let header = {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      }
    }

    this.httpClient.get(apiUrl, header).subscribe(
      (result: string[]) => {
        console.log({ "api_result_populateUserProfileNames": result });
        this.userProfileNames = result;
      }, (err) => {
        console.log({ "api_error_populateUserProfileNames": err });
      }
    );

  }

  async ngOnInit() {
    await this.populateUserProfileNames();
  }

  ngOnDestroy() {
    this.subscriptions && this.subscriptions.unsubscribe();
  }

}
