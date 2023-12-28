import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasSubmeterComponent } from './gas-submeter.component';

describe('GasSubmeterComponent', () => {
  let component: GasSubmeterComponent;
  let fixture: ComponentFixture<GasSubmeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GasSubmeterComponent]
    });
    fixture = TestBed.createComponent(GasSubmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
