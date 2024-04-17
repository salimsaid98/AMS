import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvestorsComponent } from './add-investors.component';

describe('AddInvestorsComponent', () => {
  let component: AddInvestorsComponent;
  let fixture: ComponentFixture<AddInvestorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInvestorsComponent]
    });
    fixture = TestBed.createComponent(AddInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
