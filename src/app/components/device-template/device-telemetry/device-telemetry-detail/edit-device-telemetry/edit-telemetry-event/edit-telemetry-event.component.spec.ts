import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelemetryEventComponent } from './edit-telemetry-event.component';

describe('EditTelemetryEventComponent', () => {
  let component: EditTelemetryEventComponent;
  let fixture: ComponentFixture<EditTelemetryEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTelemetryEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelemetryEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
