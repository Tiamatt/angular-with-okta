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
      public oktaAuthService: OktaAuthService,
      public userProfileService: UserProfileService,
  ) { }

  private async populateUserProfileNames() {
    await this.userProfileService.GetNames().then(promise => { promise
      .subscribe(
          (result: string[]) => {
            console.log({ "api_result_populateUserProfileNames": result });
            this.userProfileNames = result;
          }, (err) => {
            console.log({ "api_error_populateUserProfileNames": err });
          }
      ); 
    });
  }

  private async populateUserProfileName(id: number) {
    await this.userProfileService.GetName(id).then(promise => { promise
      .subscribe(
          (result: any) => {
            console.log({ "api_result_populateUserProfileName": result });
            // TODO - use it
          }, (err) => {
            console.log({ "api_error_populateUserProfileName": err });
          }
      ); 
    });
  }

  async ngOnInit() {
    await this.populateUserProfileNames();
    await this.populateUserProfileName(345);
  }

  ngOnDestroy() {
    this.subscriptions && this.subscriptions.unsubscribe();
  }

}
