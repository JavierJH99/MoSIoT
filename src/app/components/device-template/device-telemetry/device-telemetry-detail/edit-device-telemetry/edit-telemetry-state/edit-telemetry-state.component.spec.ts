import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTelemetryStateComponent } from './edit-telemetry-state.component';

describe('EditTelemetryStateComponent', () => {
  let component: EditTelemetryStateComponent;
  let fixture: ComponentFixture<EditTelemetryStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTelemetryStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTelemetryStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
