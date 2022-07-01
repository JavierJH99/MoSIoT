import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/Patient Profile/patient-profile';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'edit-patient-profile-details',
  templateUrl: './edit-patient-profile-details.component.html',
  styleUrls: ['./edit-patient-profile-details.component.scss']
})
export class EditPatientProfileDetailsComponent implements OnInit {
  patient!:PatientProfile;
  newPatient!:PatientProfile;
  patients!:PatientProfile[];

  patientProfileForm = this.fb.group({
    Name:['',Validators.required],
    Description:['', Validators.required],
    Hazard:[''],
    Region:['', Validators.required],
    Language:['']
  })

  get Name() { return this.patientProfileForm.get('Name'); }
  get Description() { return this.patientProfileForm.get('Description'); }
  get Hazard() { return this.patientProfileForm.get('Hazard'); }
  get Region() { return this.patientProfileForm.get('Region'); }
  get Language() { return this.patientProfileForm.get('Language'); }
  
  constructor(private fb:FormBuilder, private patientService:PatientProfileService, private router:Router) { }

  ngOnInit(): void {
    this.patients = JSON.parse('' + localStorage.getItem('patientProfiles'));
    this.patient = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    //If not exists, create new
    if(!this.patients.some(patient => patient.Id == this.patient.Id)){
      alert("Creating new patient, fill in the fields");
      this.patientProfileForm.setValue({Name: "", Description: "", Hazard: 1, Region: "", Language: 1});
    } 
    //If exists
    else{
      this.patientProfileForm.setValue({Name: this.patient.Name, Description: this.patient.Description, Hazard: this.patient.HazardAvoidance, Region: this.patient.Region, Language: this.patient.PreferredLanguage});
    }
  }

  editPatientProfile(){
    this.patient.Name = this.patientProfileForm.get('Name')?.value
    this.patient.Description = this.patientProfileForm.get('Description')?.value
    this.patient.HazardAvoidance = this.patientProfileForm.get('Hazard')?.value
    this.patient.Region = this.patientProfileForm.get('Region')?.value
    this.patient.PreferredLanguage = this.patientProfileForm.get('Language')?.value

    if(!this.patients.some(patient => patient.Id == this.patient.Id)){
      this.patientService.createPatientProfile(this.patient).subscribe({
        next: result => {
          this.newPatient = result;
        },
        error: error => {
          alert("There was a problem creating the device: " + error);
        },
        complete: () => {
          localStorage.setItem('patientProfileDetail',JSON.stringify(this.newPatient));
          this.router.navigateByUrl("PatientProfile/ " + this.newPatient.Id);
          alert(this.patient.Name + " created");
        }
      })
    }
    else{
      this.patientService.updatePatientProfile(this.patient.Id,this.patient).subscribe({
        next : result =>{
          console.log(result);
        },
        error : error => {
          alert("Failed to save changes: " + error);
        },
        complete : () => {
          localStorage.setItem('patientProfileDetail',JSON.stringify(this.patient));
          this.router.navigateByUrl("PatientProfile/ " + this.patient.Id);
          alert("Changes saved");
        }
      });
    }
  }

  cancelPatientProfile(){
    this.router.navigateByUrl("PatientProfile");
  }
}
