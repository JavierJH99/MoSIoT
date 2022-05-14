import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PatientProfile } from 'src/app/models/patient-profile';
import { PatientProfileService } from 'src/app/services/patient-profile.service';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-patient-profile-detail',
  templateUrl: './patient-profile-detail.component.html',
  styleUrls: ['./patient-profile-detail.component.scss']
})
export class PatientProfileDetailComponent implements OnInit {
  id!:number;
  patientProfile!:PatientProfile;
  cargando!:boolean;

  constructor(private activatedRoute: ActivatedRoute, private patientProfileService: PatientProfileService, 
    public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.cargando = true;

    this.activatedRoute.params.subscribe((params: Params) => this.id = params['patientProfileId']);
    this.patientProfileService.getPatientProfileById(this.id).subscribe({
      next: result => {
        this.patientProfile = result;
      },
      error: error => {
        this.cargando = false;
        alert("An error occurred while accessing the patient profile: " + error);
      },
      complete: () => {
        this.cargando = false;
        localStorage.setItem('patientProfileDetail',JSON.stringify(this.patientProfile));
      }
    })
  }

  removeDialog(){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: this.patientProfile.Name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing the patient profile: " + error);
        removeConfirm = 0;
      },
      complete: () => {
        if(removeConfirm == 1){
          this.removePatientProfile();
        }
      }
    });
  }

  removePatientProfile(){
    this.patientProfileService.deletePatientProfile(this.patientProfile.Id).subscribe({
      next: result => {
        console.log("Removing patient profile...");
      },
      error: error => {
        alert("There was a problem removing the patient profile: " + error);
      },
      complete: () => {
        alert("Patient profile removed successfully");
        this.router.navigateByUrl("/PatientProfile");
      }
    })
  }
}