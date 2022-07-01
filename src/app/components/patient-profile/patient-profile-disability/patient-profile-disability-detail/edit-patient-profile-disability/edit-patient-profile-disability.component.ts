import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Disability } from 'src/app/models/disability';
import { PatientProfile } from 'src/app/models/patient-profile';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'app-edit-patient-profile-disability',
  templateUrl: './edit-patient-profile-disability.component.html',
  styleUrls: ['./edit-patient-profile-disability.component.scss']
})
export class EditPatientProfileDisabilityComponent implements OnInit {
  patient!:PatientProfile;
  disability!:Disability;
  id!:number;

  patientDisabilityForm = this.fb.group({
    Name:['',Validators.required],
    Type:[''],
    Severity:[''],
    Description:['',Validators.required]
  })

  get Name() { return this.patientDisabilityForm.get('Name'); }
  get Type() { return this.patientDisabilityForm.get('Type'); }
  get Severity() { return this.patientDisabilityForm.get('Severity'); }
  get Description() { return this.patientDisabilityForm.get('Description'); }
  
  constructor(private fb:FormBuilder, private patientService:PatientProfileService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patient = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['disabilityId']);
    this.disability = this.patient.Disabilities.find(disability => disability.Id == this.id)!;

    //If not exists, create new
    if(!this.patient.Disabilities.some(disability => disability.Id == this.id)){
      alert("Creating new condition, fill in the fields");
      this.patientDisabilityForm.setValue({Name: "", Type: 1, Severity: 1, Description: ""});
    } 
    //If exists
    else{
      this.patientDisabilityForm.setValue({Name: this.disability.Name, Type: this.disability.Type, Severity: this.disability.Severity, Description: this.disability.Description});
    }
  }

  editPatientDisability(){
    this.disability.Name = this.patientDisabilityForm.get('Name')?.value;
    this.disability.Type = this.patientDisabilityForm.get('Type')?.value;
    this.disability.Severity = this.patientDisabilityForm.get('Severity')?.value;
    this.disability.Description = this.patientDisabilityForm.get('Description')?.value;

    if(!this.patient.Disabilities.some(disability => disability.Id == this.disability.Id)){
      // this.condition.Id = this.patient.Id
      this.patientService.createDisability(this.disability).subscribe({
        next : result =>{
          this.disability = result;
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
      this.patientService.updatePatientDisability(this.disability.Id,this.disability).subscribe({
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

  cancelPatientDisability(){
    this.router.navigateByUrl("PatientProfile/ " + this.patient.Id);
  }
}
