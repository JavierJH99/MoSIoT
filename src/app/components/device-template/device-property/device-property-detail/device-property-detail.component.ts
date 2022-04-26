import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { DeviceTemplate } from 'src/app/models/device-template';
import { Property } from 'src/app/models/property';
import { TableDataSource } from 'src/app/models/table-data-source';
import { DeviceTemplateService } from 'src/app/services/device-template.service';

@Component({
  selector: 'app-device-property-detail',
  templateUrl: './device-property-detail.component.html',
  styleUrls: ['./device-property-detail.component.scss']
})
export class DevicePropertyDetailComponent implements OnInit {
  id!:number;
  device!:DeviceTemplate;
  property!:Property;
  tableDataSource!:TableDataSource[];

  writable!:string;
  cloudable!:string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    public dialog: MatDialog, private deviceService: DeviceTemplateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['propertyId']);

    this.device = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.property = this.device.Properties.find(property => property.Id == this.id)!;

    this.loadTable();
  }

  loadTable(){
    if(this.property.IsCloudable as boolean){
      this.cloudable = "ON"
    }
    else{
      this.cloudable = "OFF"
    }

    if(this.property.IsWritable as boolean){
      this.writable = "ON"
    }
    else{
      this.writable = "OFF"
    }

    this.tableDataSource = [
      {
        Name: "Writable",
        Value: this.writable
      },
      {
        Name: "Cloudable",
        Value: this.cloudable
      }
    ]
  }

  editProperty(){
    this.router.navigateByUrl("DeviceTemplate/ " + this.device.Name + "/Property/" + this.property.Id + "/Edit");
  }

  removeDialog(){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: this.property.Name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing the property: " + error);
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
    console.log("Property ID to remove: " + this.property.Id);
    this.deviceService.deleteDeviceProperty(this.property.Id).subscribe({
      next: result => {
        console.log("Removing device property...");
      },
      error: error => {
        alert("There was a problem removing the property: " + error);
      },
      complete: () => {
        alert("Property removed successfully");
        this.router.navigateByUrl("/DeviceTemplate/" + this.device.Id);
      }
    })
  }

}
