import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricSubmeterComponent } from './electric-submeter.component';

describe('ElectricSubmeterComponent', () => {
  let component: ElectricSubmeterComponent;
  let fixture: ComponentFixture<ElectricSubmeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricSubmeterComponent]
    });
    fixture = TestBed.createComponent(ElectricSubmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
