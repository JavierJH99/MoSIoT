import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DisabilityAdapterComponent } from 'src/app/adapters/Patient Profile/disability-adapter/disability-adapter.component';
import { Disability } from 'src/app/models/Patient Profile/disability';
import { PatientProfile } from 'src/app/models/Patient Profile/patient-profile';
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
  newDisability:boolean = false;

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
    private router:Router, private activatedRoute: ActivatedRoute, private disabilityAdapater: DisabilityAdapterComponent) { }

  ngOnInit(): void {
    this.patient = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['disabilityId']);
    this.disability = this.patient.Disabilities.find(disability => disability.Id == this.id)!;

    //If not exists, create new
    if(!this.patient.Disabilities.some(disability => disability.Id == this.id)){
      alert("Creating new condition, fill in the fields");
      this.newDisability = true;
      this.initDefaults();
    }

    this.patientDisabilityForm.setValue({Name: this.disability.Name, Type: this.disability.Type, Severity: this.disability.Severity, Description: this.disability.Description});
  }

  initDefaults(){
    this.disability = {
      Id: 0,
      Name: "",
      Description: "",
      Severity: 1,
      Type: 1
    }
  }

  editPatientDisability(){
    this.disability.Name = this.patientDisabilityForm.get('Name')?.value;
    this.disability.Type = this.patientDisabilityForm.get('Type')?.value;
    this.disability.Severity = this.patientDisabilityForm.get('Severity')?.value;
    this.disability.Description = this.patientDisabilityForm.get('Description')?.value;

    if(this.newDisability){
      this.patientService.createDisability(this.disabilityAdapater.newDisability(this.disability, this.patient.Id)).subscribe({
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
