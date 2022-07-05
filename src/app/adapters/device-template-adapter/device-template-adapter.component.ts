import { Component, OnInit } from '@angular/core';
import { Command } from 'src/app/models/Device Template/command';
import { DeviceTemplate } from 'src/app/models/Device Template/device-template';
import { NewCommand } from 'src/app/models/Device Template/new-command';
import { NewDevice } from 'src/app/models/Device Template/new-device';
import { NewProperty } from 'src/app/models/Device Template/new-property';
import { Property } from 'src/app/models/Device Template/property';

@Component({
  selector: 'app-device-template-adapter',
  templateUrl: './device-template-adapter.component.html',
  styleUrls: ['./device-template-adapter.component.scss']
})
export class DeviceTemplateAdapterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newDevice(device: DeviceTemplate): NewDevice {
    let newDevice: NewDevice;

    newDevice = {
      IsEdge: device.IsEdge,
      Name: device.Name,
      Type: device.Type
    }

    return newDevice;
  }

  newProperty(property: Property, idDeviceTemplate: number): NewProperty{
    let newProperty: NewProperty;

    newProperty = {
      DeviceTemplate_oid: idDeviceTemplate,
      IsCloudable: property.IsCloudable,
      IsWritable: property.IsWritable,
      Name: property.Name
    }

    return newProperty;
  }

  newCommnad(command: Command, idDeviceTemplate: number): NewCommand{
    let newCommand: NewCommand;

    newCommand = {
      DeviceTemplate_oid: idDeviceTemplate,
      Description: command.Description,
      IsSynchronous: command.IsSynchronous,
      Name: command.Name,
      Type: command.Type
    }

    return newCommand;
  }

}
