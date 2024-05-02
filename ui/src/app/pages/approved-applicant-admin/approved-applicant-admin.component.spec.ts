import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedApplicantAdminComponent } from './approved-applicant-admin.component';

describe('ApprovedApplicantAdminComponent', () => {
  let component: ApprovedApplicantAdminComponent;
  let fixture: ComponentFixture<ApprovedApplicantAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedApplicantAdminComponent]
    });
    fixture = TestBed.createComponent(ApprovedApplicantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
