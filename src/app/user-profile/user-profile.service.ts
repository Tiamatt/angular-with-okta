import { Injectable } from '@angular/core';
import { Observable, EMPTY, BehaviorSubject, of, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  /* ------------- observables ------------- */
  // public myVarSource = new BehaviorSubject<boolean>(null);
  // public myVar: Observable<boolean> = this.myVarSource.asObservable();


  /* ------------- private variables ------------- */
  private readonly baseApi: string = 'https://localhost:44375/api/';
  private readonly controller: string = 'userProfile';
 
  constructor(
      private httpClient: HttpClient,
      public oktaAuthService: OktaAuthService,
    ) {
  }

  /* -------------  Private  methods ------------- */
  private resolveUrl(method: string): string { 
    return this.baseApi + this.controller + method;
  } 

  private async generateHeaderWithToken() {
    const accessToken = await this.oktaAuthService.getAccessToken();
    return  { 
              headers: { 
                Authorization: 'Bearer ' + accessToken,
              } 
            };
  }

  /* -------------  APIs ------------- */
  // call /api/userProfile/names
  public async GetNames(): Promise<Observable<string[]>> {
      let header = await this.generateHeaderWithToken();
      let apiUrl = this.resolveUrl('/names');
      return this.httpClient.get<string[]>(apiUrl, header);
  }

  // call /api/userProfile/name/{id}
  public async GetName(id: number): Promise<Observable<any>> {
    let header = await this.generateHeaderWithToken();
    let apiUrl = this.resolveUrl('/name/' + id);
    return this.httpClient.get<any>(apiUrl, header);
  }

}