import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceTemplateAdapterComponent } from 'src/app/adapters/device-template-adapter/device-template-adapter.component';
import { State } from 'src/app/models/Device Template/state';
import { Telemetry } from 'src/app/models/Device Template/telemetry';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'edit-state-telemetry',
  templateUrl: './edit-state-telemetry.component.html',
  styleUrls: ['./edit-state-telemetry.component.scss']
})
export class EditStateTelemetryComponent implements OnInit {
  @Input() telemetry!: Telemetry;
  state!:State;
  stateName!:string;

  newState:boolean = false;

  stateForm = this.fb.group({
    Name:['',Validators.required]
  })

  get Name() { return this.stateForm.get('Name'); }
  
  constructor(private fb:FormBuilder, private deviceTemplateService:DeviceTemplateService, private router:Router, private deviceAdapter: DeviceTemplateAdapterComponent) { }

  ngOnInit(): void {
    this.state = this.telemetry.State!;
  }

  editState(){
    this.stateName = this.stateForm.get('Name')?.value;

    this.deviceTemplateService.createStateTelemetry(this.deviceAdapter.newStateTelemetry(this.stateName, this.telemetry.Id)).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to add condition: " + error);
      },
      complete : () => {
        window.location.reload();
        alert("Condition added");
      }
    });
  }

  cancelState(){
    this.newState = false;
  }

  removeState(){
    this.deviceTemplateService.deleteStateTelemetry(this.state.Id).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to delete state: " + error);
      },
      complete : () => {
        alert("State deleted");
      }
    });
  }
}
