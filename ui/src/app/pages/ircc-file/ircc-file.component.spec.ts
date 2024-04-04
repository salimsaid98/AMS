import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrccFileComponent } from './ircc-file.component';

describe('IrccFileComponent', () => {
  let component: IrccFileComponent;
  let fixture: ComponentFixture<IrccFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrccFileComponent]
    });
    fixture = TestBed.createComponent(IrccFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
