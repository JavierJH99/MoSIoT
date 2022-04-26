import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { Property } from 'src/app/models/property';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'app-edit-device-property',
  templateUrl: './edit-device-property.component.html',
  styleUrls: ['./edit-device-property.component.scss']
})
export class EditDevicePropertyComponent implements OnInit {
  device!:DeviceTemplate;
  property!:Property;
  id!:number;

  devicePropertyForm = this.fb.group({
    Name:['',Validators.required],
    Writable:[''],
    Cloudable:['']
  })

  get Name() { return this.devicePropertyForm.get('Name'); }
  get Writable() { return this.devicePropertyForm.get('Writable'); }
  get Cloudable() { return this.devicePropertyForm.get('Cloudable'); }
  
  constructor(private fb:FormBuilder, private deviceService:DeviceTemplateService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['propertyId']);
    this.property = this.device.Properties.find(property => property.Id == this.id)!;

    this.devicePropertyForm.setValue({
      Name: this.property.Name,
      Writable: this.property.IsWritable ,
      Cloudable: this.property.IsCloudable
    });
  }

  editDeviceProperty(){
    this.property.Name = this.devicePropertyForm.get('Name')?.value;
    this.property.IsWritable = this.devicePropertyForm.get('Writable')?.value;
    this.property.IsCloudable = this.devicePropertyForm.get('Cloudable')?.value;

    this.deviceService.updateDeviceProperty(this.property.Id,this.property).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to save changes: " + error);
      },
      complete : () => {
        localStorage.setItem('deviceDetail',JSON.stringify(this.device));
        this.router.navigateByUrl("DeviceTemplate/" + this.device.Name + "/Property/" + this.property.Id);
      }
    });
  }

  cancelDeviceProperty(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Id);
  }
}
