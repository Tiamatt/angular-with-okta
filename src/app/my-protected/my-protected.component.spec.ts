import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProtectedComponent } from './my-protected.component';

describe('MyProtectedComponent', () => {
  let component: MyProtectedComponent;
  let fixture: ComponentFixture<MyProtectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProtectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProtectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
