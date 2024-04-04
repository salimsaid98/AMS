import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedFileComponent } from './prepared-file.component';

describe('PreparedFileComponent', () => {
  let component: PreparedFileComponent;
  let fixture: ComponentFixture<PreparedFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreparedFileComponent]
    });
    fixture = TestBed.createComponent(PreparedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
