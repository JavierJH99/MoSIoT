import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/device-template';
import { Property } from 'src/app/models/property';
import { TableDataSource } from 'src/app/models/table-data-source';

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

  constructor(private activatedRoute: ActivatedRoute) { }

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

}
