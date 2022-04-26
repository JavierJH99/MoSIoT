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
    Type:[''],
    IsEdge:[''],
  })

  get Name() { return this.deviceProfileForm.get('Name'); }
  get Type() { return this.deviceProfileForm.get('Type'); }
  get IsEdge() { return this.deviceProfileForm.get('IsEdge'); }
  
  constructor(private fb:FormBuilder, private deviceService:DeviceTemplateService, private router:Router) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.deviceProfileForm.setValue({Name: this.device.Name, Type: this.device.Type, IsEdge: this.device.IsEdge});

    //If not exists, create new
    this.devices = JSON.parse('' + localStorage.getItem('devices'));
    
    if(!this.devices.find(device => device.Id == this.device.Id)){
      this.deviceService.createDeviceTemplate(this.device).subscribe({
        next: result => {
          this.newDevice = result;
        },
        error: error => {
          alert("There was a problem creating the device: " + error);
        },
        complete: () => {
          this.device = this.newDevice;
          alert("Creating new device, fill in the fields");
        }
      })
    }
  }

  editDeviceProfile(){
    this.device.Name = this.deviceProfileForm.get('Name')?.value
    this.device.IsEdge = this.deviceProfileForm.get('IsEdge')?.value
    this.device.Type = this.deviceProfileForm.get('Type')?.value

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
      }
    });
  }

  cancelDeviceProfile(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Id);
  }
}
