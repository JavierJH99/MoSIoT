import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelemetrySpecificComponent } from './edit-telemetry-specific.component';

describe('EditTelemetrySpecificComponent', () => {
  let component: EditTelemetrySpecificComponent;
  let fixture: ComponentFixture<EditTelemetrySpecificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTelemetrySpecificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelemetrySpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
