import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';

@Component({
  selector: 'device-telemetry',
  templateUrl: './device-telemetry.component.html',
  styleUrls: ['./device-telemetry.component.scss']
})
export class DeviceTelemetryComponent implements OnInit {
  device!:DeviceTemplate;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
  }

  details(id:number){
    this.router.navigate(["DeviceTemplate/" + this.device.Name + "/Telemetry/" + id]);
  }

}
