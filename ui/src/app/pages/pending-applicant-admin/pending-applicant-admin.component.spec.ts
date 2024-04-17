import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApplicantAdminComponent } from './pending-applicant-admin.component';

describe('PendingApplicantAdminComponent', () => {
  let component: PendingApplicantAdminComponent;
  let fixture: ComponentFixture<PendingApplicantAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingApplicantAdminComponent]
    });
    fixture = TestBed.createComponent(PendingApplicantAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
