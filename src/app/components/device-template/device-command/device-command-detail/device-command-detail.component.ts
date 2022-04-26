import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { Command } from 'src/app/models/command';
import { DeviceTemplate } from 'src/app/models/device-template';
import { TableDataSource } from 'src/app/models/table-data-source';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'app-device-command-detail',
  templateUrl: './device-command-detail.component.html',
  styleUrls: ['./device-command-detail.component.scss']
})
export class DeviceCommandDetailComponent implements OnInit {
  id!:number;
  device!:DeviceTemplate;
  command!:Command;
  tableDataSource!:TableDataSource[];

  synchronous!:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    public dialog: MatDialog, private deviceService: DeviceTemplateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['commandId']);
    
    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.command = this.device.Commands.find(command => command.Id == this.id)!;

    this.loadTable();
  }

  loadTable(){
    if(this.command.IsSynchronous as boolean){
      this.synchronous = "ON"
    }
    else{
      this.synchronous = "OFF"
    }

    this.tableDataSource = [
      {
        Name: "Synchronous",
        Value: this.synchronous
      }
    ]
  }

  editCommand(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Name + "/Command/" + this.command.Id + "/Edit");
  }

  removeDialog(){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: this.command.Name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing the command: " + error);
        removeConfirm = 0;
      },
      complete: () => {
        if(removeConfirm == 1){
          this.removeDeviceProperty();
        }
      }
    });
  }

  removeDeviceProperty(){
    this.deviceService.deleteDeviceProperty(this.command.Id).subscribe({
      next: result => {
        console.log("Removing device command...");
      },
      error: error => {
        alert("There was a problem removing the command: " + error);
      },
      complete: () => {
        alert("Command removed successfully");
        this.router.navigateByUrl("/DeviceTemplate/" + this.device.Id);
      }
    })
  }

}
