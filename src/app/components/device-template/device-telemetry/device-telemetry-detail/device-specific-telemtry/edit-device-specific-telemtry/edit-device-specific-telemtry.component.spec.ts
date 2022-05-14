import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeviceSpecificTelemtryComponent } from './edit-device-specific-telemtry.component';

describe('EditDeviceSpecificTelemtryComponent', () => {
  let component: EditDeviceSpecificTelemtryComponent;
  let fixture: ComponentFixture<EditDeviceSpecificTelemtryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeviceSpecificTelemtryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeviceSpecificTelemtryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
