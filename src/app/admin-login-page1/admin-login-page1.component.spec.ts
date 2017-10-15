import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginPage1Component } from './admin-login-page1.component';

describe('AdminLoginPage1Component', () => {
  let component: AdminLoginPage1Component;
  let fixture: ComponentFixture<AdminLoginPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
