import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVendorFormComponent } from './request-vendor-form.component';

describe('RequestVendorFormComponent', () => {
  let component: RequestVendorFormComponent;
  let fixture: ComponentFixture<RequestVendorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestVendorFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVendorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
