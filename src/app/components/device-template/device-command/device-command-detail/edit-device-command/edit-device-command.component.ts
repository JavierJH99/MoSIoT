import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Command } from 'src/app/models/command';
import { DeviceTemplate } from 'src/app/models/device-template';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'app-edit-device-command',
  templateUrl: './edit-device-command.component.html',
  styleUrls: ['./edit-device-command.component.scss']
})
export class EditDeviceCommandComponent implements OnInit {
  device!:DeviceTemplate;
  command!:Command;
  id!:number;

  deviceCommandForm = this.fb.group({
    Name:['',Validators.required],
    Synchronous:['']
  })

  get Name() { return this.deviceCommandForm.get('Name'); }
  get Synchronous() { return this.deviceCommandForm.get('Synchronous'); }
  
  constructor(private fb:FormBuilder, private deviceService:DeviceTemplateService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['commandId']);
    this.command = this.device.Commands?.find(command => command.Id == this.id)!;

    this.deviceCommandForm.setValue({
      Name: this.command.Name,
      Synchronous: this.command.IsSynchronous
    });
  }

  editDeviceCommand(){
    this.command.Name = this.deviceCommandForm.get('Name')?.value;
    this.command.IsSynchronous = this.deviceCommandForm.get('Synchronous')?.value;

    this.deviceService.updateDeviceCommand(this.command.Id,this.command).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to save changes: " + error);
      },
      complete : () => {
        localStorage.setItem('deviceDetail',JSON.stringify(this.device));
        this.router.navigateByUrl("DeviceTemplate/" + this.device.Name + "/Command/" + this.command.Id);
      }
    });
  }

  cancelDeviceCommand(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Id);
  }
}
