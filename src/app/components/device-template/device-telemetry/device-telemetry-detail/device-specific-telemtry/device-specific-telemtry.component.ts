import { Component, Input, OnInit } from '@angular/core';
import { TableDataSource } from 'src/app/models/table-data-source';
import { Telemetry } from 'src/app/models/telemetry';
import { SeverityPipe } from 'src/app/pipes/Device/severity.pipe';

@Component({
  selector: 'device-specific-telemtry',
  templateUrl: './device-specific-telemtry.component.html',
  styleUrls: ['./device-specific-telemtry.component.scss']
})
export class DeviceSpecificTelemtryComponent implements OnInit {
  @Input() telemetry !:Telemetry;
  tableSpecificTelemetryDataSource!:TableDataSource[];

  constructor(private severityPipe: SeverityPipe) { }

  ngOnInit(): void {
    switch(this.telemetry.Type){
      case 1:
        this.loadStateTelemetry();
        break;
      case 2:
        this.loadEventTelemetry();
        break;
      case 3:
        this.loadLocationTelemtry();
        break;
      case 4:
        this.loadSensorTelemetry();
        break;
      default:
        this.loadStateTelemetry();
        break;
    }
  }

  loadStateTelemetry(){
    this.tableSpecificTelemetryDataSource = [];

    this.telemetry.State?.States.forEach(state => {
      this.tableSpecificTelemetryDataSource.push(
        {
          Name: state.name,
          Value: state.value
        }
      )
    })
  }

  loadEventTelemetry(){
    this.tableSpecificTelemetryDataSource = [
      {
        Name: "Severity",
        Value: this.severityPipe.transform(this.telemetry.Event_?.Severity!)
      }
    ] 
  }

  loadLocationTelemtry(){
    this.tableSpecificTelemetryDataSource = [
      {
        Name: "Latitude",
        Value: this.telemetry.Location?.Latitude
      },
      {
        Name: "Longitude",
        Value: this.telemetry.Location?.Longitude
      },
      {
        Name: "Altitude",
        Value: this.telemetry.Location?.Altitude
      }
    ]
  }

  loadSensorTelemetry(){
    this.tableSpecificTelemetryDataSource = [
      {
        Name: "Sensor Type",
        Value: this.telemetry.Sensor?.SensorType
      }
    ]
  }
}
