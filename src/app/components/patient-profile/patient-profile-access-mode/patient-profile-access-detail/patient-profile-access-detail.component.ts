import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { AccessMode } from 'src/app/models/access-mode';
import { PatientProfile } from 'src/app/models/patient-profile';
import { TableDataSource } from 'src/app/models/table-data-source';
import { AccessModeTypePipe } from 'src/app/pipes/PatientProfile/access-mode-type.pipe';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'app-patient-profile-access-detail',
  templateUrl: './patient-profile-access-detail.component.html',
  styleUrls: ['./patient-profile-access-detail.component.scss']
})
export class PatientProfileAccessDetailComponent implements OnInit {
  id!:number;
  patientProfile!:PatientProfile;
  accessMode!:AccessMode;
  tableDataSource!:TableDataSource[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    public dialog: MatDialog, private patientProfileService: PatientProfileService,
    private accessModeTypePipe: AccessModeTypePipe) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['accessModeId']);

    this.patientProfile = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.accessMode = this.patientProfile.AccessMode.find(accessMode => accessMode.Id == this.id)!;
    
    this.loadTable(); 
  }

  loadTable(){
    this.tableDataSource = [
      {
        Name: "Access mode type",
        Value: this.accessModeTypePipe.transform(this.accessMode.TypeAccessMode)
      },
      {
        Name: "Description",
        Value: this.accessMode.Description
      }
    ]
  }

  editCondition(){
    this.router.navigateByUrl("PatientProfile/ " + this.patientProfile.Name + "/AccessMode/" + this.accessMode.Id + "/Edit");
  }

  removeDialog(){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: this.accessMode.Name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing the access mode: " + error);
        removeConfirm = 0;
      },
      complete: () => {
        if(removeConfirm == 1){
          this.removePatientProfileCondition();
        }
      }
    });
  }

  removePatientProfileCondition(){
    console.log("Access mode ID to remove: " + this.accessMode.Id);
    this.patientProfileService.deleteCondition(this.accessMode.Id).subscribe({
      next: result => {
        console.log("Removing access mode...");
      },
      error: error => {
        alert("There was a problem removing the access mode: " + error);
      },
      complete: () => {
        alert("Access mode removed successfully");
        this.router.navigateByUrl("/PatientProfile/" + this.patientProfile.Id);
      }
    })
  }
}
