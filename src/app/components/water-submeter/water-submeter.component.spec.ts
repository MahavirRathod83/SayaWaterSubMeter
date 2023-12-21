import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSubmeterComponent } from './water-submeter.component';

describe('WaterSubmeterComponent', () => {
  let component: WaterSubmeterComponent;
  let fixture: ComponentFixture<WaterSubmeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterSubmeterComponent]
    });
    fixture = TestBed.createComponent(WaterSubmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
