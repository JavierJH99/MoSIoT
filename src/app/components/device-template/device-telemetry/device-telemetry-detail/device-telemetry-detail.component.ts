import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { TableDataSource } from 'src/app/models/table-data-source';
import { Telemetry } from 'src/app/models/telemetry';

@Component({
  selector: 'app-device-telemetry-detail',
  templateUrl: './device-telemetry-detail.component.html',
  styleUrls: ['./device-telemetry-detail.component.scss']
})
export class DeviceTelemetryDetailComponent implements OnInit {
  id!:number;
  device!:DeviceTemplate;
  telemetry!:Telemetry;
  tableProfileDataSource!:TableDataSource[];
  tableSpecificDataSource!:TableDataSource[];

  type!:string;
  unit!:string;
  severity!:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['telemetryId']);
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.telemetry = this.device.Telemetries.find(telemetry => telemetry.Id == this.id)!;

    switch(this.telemetry.Type){
      case 1:
        this.type = "State"
        break;
      case 2:
        this.type = "Event"
        break;
      case 3:
        this.type = "Location"
        break;
      case 4:
        this.type = "Sensor"
        break;
      default:
        this.type = "State"
        break;
    }

    this.loadProfileTable();
    this.loadSpecificTable();
  }

  loadProfileTable(){


    this.tableProfileDataSource = [
      {
        Name: "Frecency",
        Value: this.telemetry.Frecuency
      },
      {
        Name: "Type",
        Value: this.type
      },
      {
        Name: "Unit",
        Value: this.telemetry.Unit
      }
    ]
  }

  loadSpecificTable(){
    this.tableSpecificDataSource = [
      {
        Name: "Name",
        Value: this.telemetry.Name
      },
      {
        Name: "Severity",
        Value: this.telemetry.Event_.Severity
      }
    ]
  }

  editTelemetryProfile(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Name + "/Telemetry/" + this.telemetry.Id + "/Edit");
  }

}
