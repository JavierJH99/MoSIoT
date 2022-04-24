import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { DeviceTemplateService } from 'src/app/services/device-template.service';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-device-template-detail',
  templateUrl: './device-template-detail.component.html',
  styleUrls: ['./device-template-detail.component.scss']
})
export class DeviceTemplateDetailComponent implements OnInit {
  id!:number;
  device!:DeviceTemplate;
  cargando!:boolean;

  constructor(private activatedRoute: ActivatedRoute, private deviceService: DeviceTemplateService, 
    public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.cargando = true;

    this.activatedRoute.params.subscribe((params: Params) => this.id = params['deviceId']);
    this.deviceService.getDeviceTemplateById(this.id).subscribe({
      next: result => {
        this.device = result;
      },
      error: error => {
        this.cargando = false;
        alert("An error occurred while accessing the device: " + error);
      },
      complete: () => {
        this.cargando = false;
        localStorage.setItem('deviceDetail',JSON.stringify(this.device));
      }
    })
  }

  removeDialog(){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: this.device.Name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing the device: " + error);
        removeConfirm = 0;
      },
      complete: () => {
        if(removeConfirm == 1){
          this.removeDeviceTemplate();
        }
      }
    });
  }

  removeDeviceTemplate(){
    this.deviceService.deleteDeviceTemplate(this.device.Id).subscribe({
      next: result => {
        console.log("Removing device...");
      },
      error: error => {
        alert("There was a problem removing the device: " + error);
      },
      complete: () => {
        alert("Devie removed successfully");
        this.router.navigateByUrl("/DeviceTemplate");
      }
    })
  }

}
