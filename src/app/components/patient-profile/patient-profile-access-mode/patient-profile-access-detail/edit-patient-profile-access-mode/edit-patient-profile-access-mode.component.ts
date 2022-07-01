import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccessMode } from 'src/app/models/Patient Profile/access-mode';
import { PatientProfile } from 'src/app/models/Patient Profile/patient-profile';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'app-edit-patient-profile-access-mode',
  templateUrl: './edit-patient-profile-access-mode.component.html',
  styleUrls: ['./edit-patient-profile-access-mode.component.scss']
})
export class EditPatientProfileAccessModeComponent implements OnInit {
  patient!:PatientProfile;
  accessMode!:AccessMode;
  id!:number;

  patientAccessForm = this.fb.group({
    Name:['',Validators.required],
    Type:[''],
    Description:['',Validators.required]
  })

  get Name() { return this.patientAccessForm.get('Name'); }
  get Type() { return this.patientAccessForm.get('Type'); }
  get Description() { return this.patientAccessForm.get('Description'); }
  
  constructor(private fb:FormBuilder, private patientService:PatientProfileService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patient = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['accessModeId']);
    this.accessMode = this.patient.AccessMode.find(access => access.Id == this.id)!;

    //If not exists, create new
    if(!this.patient.AccessMode.some(access => access.Id == this.id)){
      alert("Creating new access mode, fill in the fields");
      this.patientAccessForm.setValue({Name: "", Type: 1, Description: ""});
    } 
    //If exists
    else{
      this.patientAccessForm.setValue({Name: this.accessMode.Name, Type: this.accessMode.TypeAccessMode, Description: this.accessMode.Description});
    }
  }

  editPatientAccess(){
    this.accessMode.Name = this.patientAccessForm.get('Name')?.value;
    this.accessMode.TypeAccessMode = this.patientAccessForm.get('Type')?.value;
    this.accessMode.Description = this.patientAccessForm.get('Description')?.value;

    if(!this.patient.AccessMode.some(access => access.Id == this.accessMode.Id)){
      // this.condition.Id = this.patient.Id
      this.patientService.createPatientAccessMode(this.accessMode).subscribe({
        next : result =>{
          this.accessMode = result;
        },
        error : error => {
          alert("Failed to save changes: " + error);
        },
        complete : () => {
          localStorage.setItem('patientProfileDetail',JSON.stringify(this.patient));
          this.router.navigateByUrl("PatientProfile/" + this.patient.Id);
          alert("Changes saved");
        }
      });
    }
    else{
      this.patientService.updatePatientAccessMode(this.accessMode.Id,this.accessMode).subscribe({
        next : result =>{
          console.log(result);
        },
        error : error => {
          alert("Failed to save changes: " + error);
        },
        complete : () => {
          localStorage.setItem('patientProfileDetail',JSON.stringify(this.patient));
          this.router.navigateByUrl("PatientProfile/" + this.patient.Id);
          alert("Changes saved");
        }
      });
    }
  }

  cancelPatientAccess(){
    this.router.navigateByUrl("PatientProfile/ " + this.patient.Id);
  }
}
