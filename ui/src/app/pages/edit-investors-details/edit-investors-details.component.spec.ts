import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvestorsDetailsComponent } from './edit-investors-details.component';

describe('EditInvestorsDetailsComponent', () => {
  let component: EditInvestorsDetailsComponent;
  let fixture: ComponentFixture<EditInvestorsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInvestorsDetailsComponent]
    });
    fixture = TestBed.createComponent(EditInvestorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
