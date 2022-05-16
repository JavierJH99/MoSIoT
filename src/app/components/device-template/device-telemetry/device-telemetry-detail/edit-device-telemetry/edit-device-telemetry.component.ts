import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { DeviceTemplateService } from 'src/app/services/device-template.service';
import { Validators } from '@angular/forms';
import { Telemetry } from 'src/app/models/telemetry';
import { NewTelemetry } from 'src/app/models/new-telemetry';

@Component({
  selector: 'app-edit-device-telemetry',
  templateUrl: './edit-device-telemetry.component.html',
  styleUrls: ['./edit-device-telemetry.component.scss']
})
export class EditDeviceTelemetryComponent implements OnInit {
  device!:DeviceTemplate;
  telemetry!:Telemetry;
  newTelemetry!:NewTelemetry;
  id!:number;

  telemtryProfileForm = this.fb.group({
    Name:['',Validators.required],
    Frecuency:['',Validators.required],
    Type:[''],
    Unit:[''],
    Severity:['']
  })

  get Name() { return this.telemtryProfileForm.get('Name'); }
  get Frecuency() { return this.telemtryProfileForm.get('Frecuency'); }
  get Type() { return this.telemtryProfileForm.get('Type'); }
  get Unit() { return this.telemtryProfileForm.get('Unit'); }
  get Severity() { return this.telemtryProfileForm.get('Severity'); }
  
  constructor(private fb:FormBuilder, private deviceService:DeviceTemplateService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['telemetryId']);
    if(this.device.Telemetries?.find(telemetry => telemetry.Id == this.id)){
      this.telemetry = this.device.Telemetries?.find(telemetry => telemetry.Id == this.id)!;      
    }
    else{
      this.createNewTelemetry();
    }

    console.log("Telemetria creada " + this.telemetry);
    this.telemtryProfileForm.setValue({
      Name: this.telemetry.Name,
      Frecuency: this.telemetry.Frecuency ,
      Type: this.telemetry.Type, 
      Unit: this.telemetry.Unit,
      Severity: this.telemetry.Event_.Severity});
  }

  editDeviceTelemetry(){
    this.telemetry.Name = this.telemtryProfileForm.get('Name')?.value;
    this.telemetry.Frecuency = this.telemtryProfileForm.get('Frecuency')?.value;
    this.telemetry.Unit = this.telemtryProfileForm.get('Unit')?.value;
    this.telemetry.Type = this.telemtryProfileForm.get('Type')?.value;
    this.telemetry.Event_.Severity = this.telemtryProfileForm.get('Severity')?.value;

    console.log(this.telemetry);
    this.deviceService.updateDeviceTelemetry(this.telemetry.Id,this.telemetry).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to save changes: " + error);
      },
      complete : () => {
        localStorage.setItem('deviceDetail',JSON.stringify(this.device));
        this.router.navigateByUrl("DeviceTemplate/" + this.device.Name + "/Telemetry/" + this.telemetry.Id);
      }
    });
  }

  createNewTelemetry(){
    this.newTelemetry = {
      DeviceTemplate_oid: this.device.Id,
      Type:1,
      Frecuency:1,
      Unit:1,
      Event_:{
        Severity:1,
      },
      Name:"",
    }

    this.telemetry = {
      Id: 1,
      Name: "",
      Type: 1,
      Unit: 1,
      Frecuency: 1,
      Event_: {
        Id: 1,
        Severity: 1
      },
      Location: {
        Id: 1,
        Altitude: 1,
        Latitude: 1,
        Longitude: 1
      },
      Schema: 1,
      Sensor: {
        Id: 1,
        SensorType: ""
      },
      State: {
        Id: 1,
        States: []
      }
    }

    this.deviceService.createTelemetry(this.newTelemetry).subscribe({
      next: result => {
        this.telemetry.Id = result.Id;
      },
      error: error => {
        alert("Failed to create telemetry: " + error);
      },
      complete: () => {
        alert("Creating new telemetry, fill in the fields")
      }
    })

    this.telemtryProfileForm.setValue({
      Name: this.telemetry.Name,
      Frecuency: this.telemetry.Frecuency ,
      Type: this.telemetry.Type, 
      Unit: this.telemetry.Unit,
      Severity: this.telemetry.Event_.Severity});
  }

  cancelDeviceTelemetry(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Id);
  }
}
