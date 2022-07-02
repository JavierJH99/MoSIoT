import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccessMode } from 'src/app/models/Patient Profile/access-mode';
import { AdaptationType } from 'src/app/models/Patient Profile/adaptation-type';
import { PatientProfile } from 'src/app/models/Patient Profile/patient-profile';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'app-edit-patient-profile-adaptation-type',
  templateUrl: './edit-patient-profile-adaptation-type.component.html',
  styleUrls: ['./edit-patient-profile-adaptation-type.component.scss']
})
export class EditPatientProfileAdaptationTypeComponent implements OnInit {
  adaptationType!:AdaptationType;
  accessMode!:AccessMode;
  patient!:PatientProfile;

  idAccessMode!:number;
  idAdapatationType!:number;

  patientAdaptationForm = this.fb.group({
    Type:[''],
    Description:['',Validators.required]
  })

  get Type() { return this.patientAdaptationForm.get('Type'); }
  get Description() { return this.patientAdaptationForm.get('Description'); }
  
  constructor(private fb:FormBuilder, private patientService:PatientProfileService, 
    private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.patient = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.idAccessMode = params['accessModeId']);
    this.accessMode = this.patient.AccessMode.find(access => access.Id == this.idAccessMode)!;
    this.activatedRoute.params.subscribe((params: Params) => this.idAdapatationType = params['adaptationTypeId']);
    this.adaptationType = this.accessMode.AdaptationType?.find(adaptation => adaptation.Id == this.idAdapatationType)!;

    this.patientAdaptationForm.setValue({Type: this.adaptationType.AdaptionRequest, Description: this.adaptationType.Description});
  }

  editPatientAdaptation(){
    this.adaptationType.AdaptionRequest = this.patientAdaptationForm.get('Type')?.value;
    this.adaptationType.Description = this.patientAdaptationForm.get('Description')?.value;
    
    this.patientService.updatePatientadAptationType(this.adaptationType.Id,this.adaptationType).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to save changes: " + error);
      },
      complete : () => {
        this.router.navigateByUrl("PatientProfile/" + this.patient.Id);
        alert("Changes saved");
      }
    });
  }

  cancelPatientAdaptation(){
    this.router.navigateByUrl("PatientProfile/ " + this.patient.Name + "/AccessMode/" + this.idAccessMode);
  }
}