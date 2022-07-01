import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { AccessMode } from 'src/app/models/Patient Profile/access-mode';
import { PatientProfile } from 'src/app/models/Patient Profile/patient-profile';
import { TableDataSource } from 'src/app/models/table-data-source';
import { AccessModeTypePipe } from 'src/app/pipes/PatientProfile/access-mode-type.pipe';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'app-patient-profile-access-detail',
  templateUrl: './patient-profile-access-detail.component.html',
  styleUrls: ['./patient-profile-access-detail.component.scss']
})
export class PatientProfileAccessDetailComponent implements OnInit {
  accessModeId!:number;
  patientProfile!:PatientProfile;
  accessMode!:AccessMode;
  tableDataSource!:TableDataSource[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    public dialog: MatDialog, private patientProfileService: PatientProfileService,
    private accessModeTypePipe: AccessModeTypePipe) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.accessModeId = params['accessModeId']);

    this.patientProfile = JSON.parse('' + localStorage.getItem('patientProfileDetail'));
    this.accessMode = this.patientProfile.AccessMode.find(accessMode => accessMode.Id == this.accessModeId)!;
    
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

  editAccessMode(){
    this.router.navigateByUrl("PatientProfile/ " + this.patientProfile.Name + "/AccessMode/" + this.accessMode.Id + "/Edit");
  }

  editAdaptationRequest(adaptationRequestId:number){
    this.router.navigateByUrl("PatientProfile/ " + this.patientProfile.Name + "/AccessMode/" + this.accessMode.Id + "/AdaptationRequest/" + adaptationRequestId + "/Edit");
  }

  createAdaptationRequest(){
    this.router.navigateByUrl("PatientProfile/ " + this.patientProfile.Name + "/AccessMode/" + this.accessMode.Id + "/AdaptationRequest/New");
  }

  removeDialog(name:string, type:number, id?:number){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: name
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
          switch(type){
            case 1:
              this.removePatientProfileCondition();
              break;
            case 2:
              this.removeAdaptationRequest(id!);
              break;
            case 3:
              this.removeAdaptationType(id!);
              break;
            case 4:
              this.removeAdaptationDetail(id!);
              break;
            default:
              alert("There was a problem removing the access mode");
              break;
          }
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

  removeAdaptationRequest(id:number){
    if(id!= null){
      this.patientProfileService.deleteAdaptationRequest(this.accessMode.Id).subscribe({
        next: result => {
          console.log("Removing adaptation request...");
        },
        error: error => {
          alert("There was a problem removing the adaptation request: " + error);
        },
        complete: () => {
          alert("Adaptation request removed successfully");
          this.router.navigateByUrl("/PatientProfile/" + this.patientProfile.Id + "AccessMode" + this.accessModeId);
        }
      })
    }
  }

  removeAdaptationType(id:number){
    if(id!= null){
      this.patientProfileService.deleteAdaptationType(this.accessMode.Id).subscribe({
        next: result => {
          console.log("Removing adaptation type...");
        },
        error: error => {
          alert("There was a problem removing the adaptation type: " + error);
        },
        complete: () => {
          alert("Adaptation type removed successfully");
          this.router.navigateByUrl("/PatientProfile/" + this.patientProfile.Id + "AccessMode" + this.accessModeId);
        }
      })
    }
  }

  removeAdaptationDetail(id:number){
    if(id!= null){
      this.patientProfileService.deleteAdaptationDetail(this.accessMode.Id).subscribe({
        next: result => {
          console.log("Removing adaptation detail...");
        },
        error: error => {
          alert("There was a problem removing the adaptation detail: " + error);
        },
        complete: () => {
          alert("Adaptation detail removed successfully");
          this.router.navigateByUrl("/PatientProfile/" + this.patientProfile.Id + "AccessMode" + this.accessModeId);
        }
      })
    }
  }
}
