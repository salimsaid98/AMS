import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicantUserComponent } from './all-applicant-user.component';

describe('AllApplicantUserComponent', () => {
  let component: AllApplicantUserComponent;
  let fixture: ComponentFixture<AllApplicantUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllApplicantUserComponent]
    });
    fixture = TestBed.createComponent(AllApplicantUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
