import { Injectable } from '@angular/core';
import { Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  /* ------------- observables ------------- */
  // public myVarSource = new BehaviorSubject<boolean>(null);
  // public myVar: Observable<boolean> = this.myVarSource.asObservable();


  /* ------------- private variables ------------- */
  private readonly baseApi: string = 'https://localhost:44375/api/';
  private readonly controller: string = 'main';
 
  constructor(
      private httpClient: HttpClient
    ) {
  }

  /* -------------  Private  methods ------------- */
  private resolveUrl(method: string): string { 
    return this.baseApi + this.controller + method;
  } 

  // /* -------------  APIs ------------- */
  public GetNames(): Observable<string[]> {
    let apiUrl = this.resolveUrl('/names');
    return this.httpClient.get<string[]>(apiUrl);
  }

  public GetName(id: number): Observable<string> {
    let apiUrl = this.resolveUrl('/name/' + id);
    return this.httpClient.get<string>(apiUrl);
  }

}





