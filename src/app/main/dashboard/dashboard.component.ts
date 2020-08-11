import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// custom services
import { MainService } from './../main.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  // public variables
  public mainNames: string[] = null;
  // private variables
  private subscriptions = new Subscription();

  constructor(
    public mainService: MainService
  ) { }

  private populateMainNames(): void {
    this.mainNames = null;
    let sub_getAllLockPeriods = this.mainService.GetNames().subscribe(
      (result: string[]) => {
        this.mainNames = result;
        console.log({ "api_result_populateMainNames": result });
        this.subscriptions.add(sub_getAllLockPeriods);
      },
      (err: string) => {
        console.log({ "api_error_populateMainNames": err });
        this.subscriptions.add(sub_getAllLockPeriods);
      },
    );
  }

  ngOnInit() {
    this.populateMainNames();
  }

  ngOnDestroy() {
    this.subscriptions && this.subscriptions.unsubscribe();
  }

}
