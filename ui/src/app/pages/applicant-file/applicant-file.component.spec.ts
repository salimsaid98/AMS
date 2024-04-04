import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantFileComponent } from './applicant-file.component';

describe('ApplicantFileComponent', () => {
  let component: ApplicantFileComponent;
  let fixture: ComponentFixture<ApplicantFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantFileComponent]
    });
    fixture = TestBed.createComponent(ApplicantFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
