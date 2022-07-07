import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplateAdapterComponent } from 'src/app/adapters/device-template-adapter/device-template-adapter.component';
import { SweetAlertsComponent } from 'src/app/components/shared/sweet-alerts/sweet-alerts.component';
import { DeviceTemplate } from 'src/app/models/Device Template/device-template';
import { State } from 'src/app/models/Device Template/state';
import { StateDevice } from 'src/app/models/Device Template/state-device';
import { Telemetry } from 'src/app/models/Device Template/telemetry';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'app-create-state-device',
  templateUrl: './create-state-device.component.html',
  styleUrls: ['./create-state-device.component.scss']
})
export class CreateStateDeviceComponent implements OnInit {
  device!:DeviceTemplate;
  telemetry!:Telemetry;
  stateTelemetry!:State;
  stateDevice!:StateDevice;

  idTelemetry!:number;
  idStateTelemetry!:number;

  stateDeviceForm = this.fb.group({
    Name:['',Validators.required],
    Value:['',Validators.required]
  })

  get Name() { return this.stateDeviceForm.get('Name'); }
  get Value() { return this.stateDeviceForm.get('Value'); }
  
  constructor(private sweetAlert:SweetAlertsComponent, private fb:FormBuilder, private router:Router, private activatedRoute: ActivatedRoute, private deviceService:DeviceTemplateService, 
    private deviceTemplateAdapter: DeviceTemplateAdapterComponent) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.idTelemetry = params['telemetryId']);
    this.telemetry = this.device.Telemetries?.find(telemetry => telemetry.Id = this.idTelemetry)!;
    this.activatedRoute.params.subscribe((params: Params) => this.idStateTelemetry = params['stateId']);
    this.stateTelemetry = this.telemetry.State!;

    this.initDefaults();

    this.stateDeviceForm.setValue({ Name: this.stateDevice.Name, Value: this.stateDevice.Value });
  }

  initDefaults(){
    this.stateDevice = {
      Id: 0,
      Name: "",
      Value: ""
    }
  }

  create(){
    this.stateDevice.Name =  this.stateDeviceForm.get('Name')?.value;
    this.stateDevice.Value =  this.stateDeviceForm.get('Value')?.value;

    this.deviceService.createStateDeviceTelemetry(this.deviceTemplateAdapter.newStateDevice(this.stateDevice, this.idStateTelemetry)).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        this.sweetAlert.createError("state device",error);
      },
      complete : () => {
        this.sweetAlert.createSuccess("state device");
        this.router.navigateByUrl("DeviceTemplate/" + this.device.Id);
      }
    });
  }

  cancel(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Name + "/Telemetry/" + this.idTelemetry);
  }
}
