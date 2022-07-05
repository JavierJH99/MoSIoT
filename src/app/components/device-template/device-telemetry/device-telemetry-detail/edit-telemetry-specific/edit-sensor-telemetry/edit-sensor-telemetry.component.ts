import { Component, Input, OnInit } from '@angular/core';
import { Telemetry } from 'src/app/models/Device Template/telemetry';

@Component({
  selector: 'edit-sensor-telemetry',
  templateUrl: './edit-sensor-telemetry.component.html',
  styleUrls: ['./edit-sensor-telemetry.component.scss']
})
export class EditSensorTelemetryComponent implements OnInit {
  @Input() telemetry!: Telemetry;

  constructor() { }

  ngOnInit(): void {
  }

}
