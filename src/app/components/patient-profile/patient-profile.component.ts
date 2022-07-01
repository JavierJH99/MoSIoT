import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/Patient Profile/patient-profile';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
  patientProfiles!: PatientProfile[];
  cargando!:boolean;

  constructor(private router: Router, private patientProfileService: PatientProfileService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.patientProfileService.getAllPatientProfile().subscribe({
      next: result => {
        this.patientProfiles = result;
      },
      error: error => {
        this.cargando = false;
        alert("There was a problem getting the devices: " + error); 
      },
      complete: () => {
        localStorage.setItem('patientProfiles',JSON.stringify(this.patientProfiles));
        this.cargando = false;
      }
    })
  }

  details(id:number){
    this.router.navigate(["PatientProfile/" + id]);
  }

  createPatientProfile(){
    let patientProfile:PatientProfile = {
      Id: -999,
      AccessMode: [],
      Condition: [],
      Description: "",
      Disabilities: [],
      HazardAvoidance: 1,
      Name: "",
      PreferredLanguage: 1,
      Region: ""
    }
    
    localStorage.setItem('patientProfileDetail',JSON.stringify(patientProfile));
    this.router.navigateByUrl("PatientProfile/NewPatient/EditDetails");
  }
}
