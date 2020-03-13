import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVendorPageComponent } from './request-vendor-page.component';

describe('RequestVendorPageComponent', () => {
  let component: RequestVendorPageComponent;
  let fixture: ComponentFixture<RequestVendorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RequestVendorPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestVendorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
