import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/Device Template/device-template';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'app-device-template',
  templateUrl: './device-template.component.html',
  styleUrls: ['./device-template.component.scss']
})
export class DeviceTemplateComponent implements OnInit {
  deviceTemplates!: DeviceTemplate[];
  cargando!:boolean;
  newDevice:DeviceTemplate = {
    Id: 0,
    Name: "",
    IsEdge: true,
    Type: 1,
  };

  constructor(private router: Router, private deviceTemplateService: DeviceTemplateService) { }

  ngOnInit(): void {
    this.cargando = true;

    this.deviceTemplateService.getAllDeviceTemplate().subscribe({
      next: result => {
        this.deviceTemplates = result;
      },
      error: error => {
        this.cargando = false;
        alert("There was a problem getting the devices: " + error); 
      },
      complete: () => {
        localStorage.setItem('devices',JSON.stringify(this.deviceTemplates));
        this.cargando = false;
      }
    })
  }

  details(id:number){
    this.router.navigate(["DeviceTemplate/" + id]);
  }

  createDevice(){
    localStorage.setItem('deviceDetail',JSON.stringify(this.newDevice));
    this.router.navigateByUrl("DeviceTemplate/New Device/EditProfile");
  }

}
