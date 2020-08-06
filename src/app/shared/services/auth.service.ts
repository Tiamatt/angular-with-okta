import { Injectable } from '@angular/core';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* observables */
  // public isAuthenticatedSource = new BehaviorSubject<boolean>(null);
  // public isAuthenticated: Observable<boolean> = this.isAuthenticatedSource.asObservable();

  constructor(
    // public oktaAuth: OktaAuthService
    ) {
  }

  // public CheckIsAuthenticated() 
  // {
  //   // Subscribe to authentication state changes
  //   this.oktaAuth.$authenticationState.subscribe(
  //     (isAuthenticated: boolean) => this.isAuthenticatedSource.next(isAuthenticated)
  //   );
  // }

}
