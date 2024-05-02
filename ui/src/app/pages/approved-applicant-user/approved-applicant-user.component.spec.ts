import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedApplicantUserComponent } from './approved-applicant-user.component';

describe('ApprovedApplicantUserComponent', () => {
  let component: ApprovedApplicantUserComponent;
  let fixture: ComponentFixture<ApprovedApplicantUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedApplicantUserComponent]
    });
    fixture = TestBed.createComponent(ApprovedApplicantUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
