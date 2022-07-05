import { Component, Input, OnInit } from '@angular/core';
import { Telemetry } from 'src/app/models/Device Template/telemetry';

@Component({
  selector: 'edit-location-telemetry',
  templateUrl: './edit-location-telemetry.component.html',
  styleUrls: ['./edit-location-telemetry.component.scss']
})
export class EditLocationTelemetryComponent implements OnInit {
  @Input() telemetry!: Telemetry;

  constructor() { }

  ngOnInit(): void {
  }

}
