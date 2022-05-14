import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceSpecificTelemtryComponent } from './device-specific-telemtry.component';

describe('DeviceSpecificTelemtryComponent', () => {
  let component: DeviceSpecificTelemtryComponent;
  let fixture: ComponentFixture<DeviceSpecificTelemtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceSpecificTelemtryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceSpecificTelemtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
