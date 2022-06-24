import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { DeviceTemplateService } from 'src/app/services/device-template.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-device-profile',
  templateUrl: './edit-device-profile.component.html',
  styleUrls: ['./edit-device-profile.component.scss']
})
export class EditDeviceProfileComponent implements OnInit {
  device!:DeviceTemplate;
  newDevice!:DeviceTemplate;
  devices!:DeviceTemplate[];

  deviceProfileForm = this.fb.group({
    Name:['',Validators.required],
    Type:['', Validators.required],
    IsEdge:[''],
  })

  get Name() { return this.deviceProfileForm.get('Name'); }
  get Type() { return this.deviceProfileForm.get('Type'); }
  get IsEdge() { return this.deviceProfileForm.get('IsEdge'); }
  
  constructor(private fb:FormBuilder, private deviceService:DeviceTemplateService, private router:Router) { }

  ngOnInit(): void {
    this.devices = JSON.parse('' + localStorage.getItem('devices'));
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    //If not exists, create new
    if(!this.devices.some(device => device.Id == this.device.Id)){
      alert("Creating new device, fill in the fields");
      this.deviceProfileForm.setValue({Name: "", Type: null, IsEdge: false});
    } 
    //If exists
    else{
      this.deviceProfileForm.setValue({Name: this.device.Name, Type: this.device.Type, IsEdge: this.device.IsEdge});
    }
  }

  editDeviceProfile(){
    this.device.Name = this.deviceProfileForm.get('Name')?.value
    this.device.IsEdge = this.deviceProfileForm.get('IsEdge')?.value
    this.device.Type = this.deviceProfileForm.get('Type')?.value

    if(!this.devices.some(device => device.Id == this.device.Id)){
      this.deviceService.createDeviceTemplate(this.device).subscribe({
        next: result => {
          this.newDevice = result;
        },
        error: error => {
          alert("There was a problem creating the device: " + error);
        },
        complete: () => {
          localStorage.setItem('deviceDetail',JSON.stringify(this.newDevice));
          this.router.navigateByUrl("DeviceTemplate/ " + this.newDevice.Id);
          alert(this.device.Name + " created");
        }
      })
    }
    else{
      this.deviceService.updateDeviceTemplate(this.device.Id,this.device).subscribe({
        next : result =>{
          console.log(result);
        },
        error : error => {
          alert("Failed to save changes: " + error);
        },
        complete : () => {
          localStorage.setItem('deviceDetail',JSON.stringify(this.device));
          this.router.navigateByUrl("DeviceTemplate/ " + this.device.Id);
          alert("Changes saved");
        }
      });
    }
  }

  cancelDeviceProfile(){
    this.router.navigateByUrl("DeviceTemplate");
  }
}
