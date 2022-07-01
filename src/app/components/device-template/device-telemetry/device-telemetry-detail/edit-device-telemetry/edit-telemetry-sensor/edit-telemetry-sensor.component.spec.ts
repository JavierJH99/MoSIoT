import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelemetrySensorComponent } from './edit-telemetry-sensor.component';

describe('EditTelemetrySensorComponent', () => {
  let component: EditTelemetrySensorComponent;
  let fixture: ComponentFixture<EditTelemetrySensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTelemetrySensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelemetrySensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
