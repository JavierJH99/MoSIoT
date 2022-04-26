import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/patient-profile';
import { TableDataSource } from 'src/app/models/table-data-source';

@Component({
  selector: 'patient-profile-details',
  templateUrl: './patient-profile-details.component.html',
  styleUrls: ['./patient-profile-details.component.scss']
})
export class PatientProfileDetailsComponent implements OnInit {
  patientProfile!:PatientProfile;

  tableDataSource!:TableDataSource[];

  Name!:string;
  Description!:string;
  Hazard!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.patientProfile = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.loadTable();
  }

  loadTable(){
    this.tableDataSource = [
      {
        Name: "Description",
        Value: this.patientProfile.Description
      },
      {
        Name: "Hazard Value",
        Value: this.patientProfile.HazardAvoidance
      },
      {
        Name: "Region",
        Value: this.patientProfile.Region
      },
      {
        Name: "Preferred Language",
        Value: this.patientProfile.PreferredLanguage
      }
    ]
  }

  editDetails(){
    this.router.navigateByUrl("PatientProfile/ " + this.patientProfile.Name + "/EditDetails");
  }
}
