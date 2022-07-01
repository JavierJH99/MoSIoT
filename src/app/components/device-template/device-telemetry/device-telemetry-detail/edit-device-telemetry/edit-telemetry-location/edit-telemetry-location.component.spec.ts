import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelemetryLocationComponent } from './edit-telemetry-location.component';

describe('EditTelemetryLocationComponent', () => {
  let component: EditTelemetryLocationComponent;
  let fixture: ComponentFixture<EditTelemetryLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTelemetryLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelemetryLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
