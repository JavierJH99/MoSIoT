import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Command } from 'src/app/models/command';
import { DeviceTemplate } from 'src/app/models/device-template';
import { TableDataSource } from 'src/app/models/table-data-source';

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

  constructor(private activatedRoute: ActivatedRoute) { }

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

}
