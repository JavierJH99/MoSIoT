import { Component, Input, OnInit } from '@angular/core';
import { Telemetry } from 'src/app/models/Device Template/telemetry';

@Component({
  selector: 'edit-event-telemetry',
  templateUrl: './edit-event-telemetry.component.html',
  styleUrls: ['./edit-event-telemetry.component.scss']
})
export class EditEventTelemetryComponent implements OnInit {
  @Input() telemetry!: Telemetry;

  constructor() { }

  ngOnInit(): void {
  }

}
