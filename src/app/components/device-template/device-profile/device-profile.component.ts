import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { TableDataSource } from 'src/app/models/table-data-source';

@Component({
  selector: 'device-profile',
  templateUrl: './device-profile.component.html',
  styleUrls: ['./device-profile.component.scss']
})
export class DeviceProfileComponent implements OnInit {
  device!:DeviceTemplate;

  tableDataSource!:TableDataSource[];

  Name!:string;
  IsEdge!:string;
  Type!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));

    if(this.device?.IsEdge as boolean){
      this.IsEdge = "ON";
    }
    else{
      this.IsEdge = "OFF";
    }

    let deviceType = this.device?.Type as number;

    if(deviceType == 1){
      this.Type = "Sensor"
    }
    else if(deviceType == 2){
      this.Type = "Actuator"
    }

    this.loadTable();
  }

  loadTable(){
    this.tableDataSource = [
      {
        Name: "Type",
        Value: this.Type
      },
      {
        Name: "IsEdge",
        Value: this.IsEdge
      }
    ]
  }

  editProfile(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Name + "/EditProfile");
  }

}
