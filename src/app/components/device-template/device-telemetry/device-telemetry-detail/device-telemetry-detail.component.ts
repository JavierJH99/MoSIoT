import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { DeviceTemplate } from 'src/app/models/device-template';
import { TableDataSource } from 'src/app/models/table-data-source';
import { Telemetry } from 'src/app/models/telemetry';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    public dialog: MatDialog, private deviceService: DeviceTemplateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['telemetryId']);
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.telemetry = this.device.Telemetries.find(telemetry => telemetry.Id == this.id)!;

    this.dataAtapter();
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
        Value: this.unit
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
        Value: this.severity
      }
    ]
  }

  editTelemetryProfile(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Name + "/Telemetry/" + this.telemetry.Id + "/Edit");
  }

  removeDialog(){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: this.telemetry.Name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing the device: " + error);
        removeConfirm = 0;
      },
      complete: () => {
        if(removeConfirm == 1){
          this.removeDeviceTelemetry();
        }
      }
    });
  }

  removeDeviceTelemetry(){
    this.deviceService.deleteDeviceTelemetry(this.telemetry.Id).subscribe({
      next: result => {
        console.log("Removing device telemetry...");
      },
      error: error => {
        alert("There was a problem removing the telemetry: " + error);
      },
      complete: () => {
        alert("Telemetry removed successfully");
        this.router.navigateByUrl("/DeviceTemplate/" + this.device.Id);
      }
    })
  }

  dataAtapter(){
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

    switch(this.telemetry.Unit){
      case 1:
        this.unit = "Percent"
        break;
      case 2:
        this.unit = "Degree farenheit"
        break;
      case 3:
        this.unit = "Degree celsius"
        break;
      case 4:
        this.unit = "Geolocation"
        break;
      case 5:
        this.unit = "Steps"
        break;
      case 6:
        this.unit = "Beats per minute"
        break;
      default:
        this.unit = "Percent"
        break;
    }

    switch(this.telemetry.Event_.Severity){
      case 0:
        this.severity = "Warning"
        break;
      case 1:
        this.severity = "Error"
        break;
      case 2:
        this.severity = "Info"
        break;
      default:
        this.severity = "Warning"
        break;
    }
  }

}
