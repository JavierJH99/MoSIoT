import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplateAdapterComponent } from 'src/app/adapters/device-template-adapter/device-template-adapter.component';
import { Command } from 'src/app/models/Device Template/command';
import { DeviceTemplate } from 'src/app/models/Device Template/device-template';
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

  isNew:boolean = false;

  deviceCommandForm = this.fb.group({
    Name:['',Validators.required],
    Type:['', Validators.required],
    Synchronous:[''],
    Description:['', Validators.required]
  })

  get Name() { return this.deviceCommandForm.get('Name'); }
  get Type() { return this.deviceCommandForm.get('Type'); }
  get Synchronous() { return this.deviceCommandForm.get('Synchronous'); }
  get Description() { return this.deviceCommandForm.get('Description'); }
  
  constructor(private fb:FormBuilder, private deviceService:DeviceTemplateService, 
    private router:Router, private activatedRoute: ActivatedRoute, private deviceAdapter: DeviceTemplateAdapterComponent) { }

  ngOnInit(): void {
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['commandId']);
    this.command = this.device.Commands?.find(command => command.Id == this.id)!;

    //If not exists, create new
    if(this.command == undefined){
      this.isNew = true;
      alert("Creating new command, fill in the fields");
      this.initDefaults();
    }
    this.deviceCommandForm.setValue({Name: this.command.Name, Type: this.command.Type, Synchronous: this.command.IsSynchronous, Description: this.command.Description});
  }

  initDefaults(){
    this.command = {
      Description: "",
      Id: 0,
      IsSynchronous: false,
      Name: "",
      Type: 1
    }
  }

  editDeviceCommand(){
    this.command.Name = this.deviceCommandForm.get('Name')?.value;
    this.command.Type = this.deviceCommandForm.get('Type')?.value;
    this.command.IsSynchronous = this.deviceCommandForm.get('Synchronous')?.value;
    this.command.Description = this.deviceCommandForm.get('Description')?.value;

    if(this.isNew){
      this.deviceService.createCommand(this.deviceAdapter.newCommnad(this.command, this.device.Id)).subscribe({
        next : result =>{
          this.command = result;
        },
        error : error => {
          alert("Failed to create new command: " + error);
        },
        complete : () => {
          localStorage.setItem('deviceDetail',JSON.stringify(this.device));
          this.router.navigateByUrl("DeviceTemplate/" + this.device.Id);
          alert("New command created");
        }
      });
    }
    else{
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
          alert("Changes saved");
        }
      });
    }
  }

  cancelDeviceCommand(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Id);
  }
}
