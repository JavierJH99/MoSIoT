import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceTemplate } from '../models/Device Template/device-template';
import { environment } from 'src/environments/environment';
import { Telemetry } from '../models/Device Template/telemetry';
import { Property } from '../models/Device Template/property';
import { Command } from '../models/Device Template/command';
import { NewTelemetry } from '../models/Device Template/new-telemetry';
import { NewProperty } from '../models/Device Template/new-property';
import { NewCommand } from '../models/Device Template/new-command';
import { NewDevice } from '../models/Device Template/new-device';
import { Sensor } from '../models/Device Template/sensor';
import { State } from '../models/Device Template/state';
import { Event } from '../models/Device Template/event';
import { NewStateTelemetry } from '../models/Device Template/new-state-telemetry';

@Injectable({
  providedIn: 'root'
})
export class DeviceTemplateService {
  constructor(private http: HttpClient) { }

  getAllDeviceTemplate(){
    return this.http.get<DeviceTemplate[]>(environment.base_url + '/DeviceTemplate/ReadAll');
  }

  getAllTelemetry(){
    return this.http.get<Telemetry[]>(environment.base_url + '/Telemetry/ReadAll');
  }

  getDeviceTemplateById(id: number){
    return this.http.get<DeviceTemplate>(environment.base_url + '/DeviceTemplate/' + id);
  }

  createDeviceTemplate(data: NewDevice){
    return this.http.post<DeviceTemplate>(environment.base_url + '/DeviceTemplate/NEW_', data);
  }

  updateDeviceTemplate(id: number, data: DeviceTemplate){
    return this.http.put(environment.base_url + '/DeviceTemplate/Modify?idDeviceTemplate=' + id, data);
  }

  deleteDeviceTemplate(id:number) {
    return this.http.delete(environment.base_url + '/DeviceTemplate/Destroy?p_devicetemplate_oid=' + id);
  }

  createTelemetry(data: NewTelemetry){
    return this.http.post<Telemetry>(environment.base_url + '/Telemetry/New_', data);
  }

  updateDeviceTelemetry(id: number, data: Telemetry){
    return this.http.put(environment.base_url + '/Telemetry/Modify?idTelemetry=' + id, data);
  }

  deleteDeviceTelemetry(id:number) {
    return this.http.delete(environment.base_url + '/Telemetry/Destroy?p_telemetry_oid=' + id);
  }

  createProperty(data: NewProperty){
    return this.http.post<Property>(environment.base_url + '/Property/New_', data);
  }

  updateDeviceProperty(id: number, data: Property){
    return this.http.put(environment.base_url + '/Property/Modify?idProperty=' + id, data);
  }

  deleteDeviceProperty(id:number) {
    return this.http.delete(environment.base_url + '/Property/Destroy?p_property_oid=' + id);
  }

  deleteDeviceCommand(id:number) {
    return this.http.delete(environment.base_url + '/Command/Destroy?p_command_oid=' + id);
  }

  createCommand(data: NewCommand){
    return this.http.post<Command>(environment.base_url + '/Command/New_', data);
  }

  updateDeviceCommand(id: number, data: Command){
    return this.http.put(environment.base_url + '/Command/Modify?idCommand=' + id, data);
  }

  createStateTelemetry(data:NewStateTelemetry) {
    return this.http.post<State>(environment.base_url + '/StateTelemetry/New_', data);
  }

  deleteStateTelemetry(id:number) {
    return this.http.delete(environment.base_url + '/StateTelemetry/Destroy?p_statetelemetry_oid=' + id);
  }

  createLocationTelemetry(data:Location) {
    return this.http.post<Location>(environment.base_url + '/LocationTelemetry/New_', data);
  }

  deleteLocationTelemetry(id:number) {
    return this.http.delete(environment.base_url + '/LocationTelemetry/Destroy?p_locationtelemetry_oid=' + id);
  }

  createSensorTelemetry(data:Sensor) {
    return this.http.post<Sensor>(environment.base_url + '/SensorTelemtetry/New_', data);
  }

  deleteSensorTelemetry(id:number) {
    return this.http.delete(environment.base_url + '/SensorTelemetry/Destroy?p_sensortelemetry_oid=' + id);
  }

  createEventTelemetry(data:Event) {
    return this.http.post<Event>(environment.base_url + '/EventTelemetry/New_', data);
  }

  deleteEventTelemetry(id:number) {
    return this.http.delete(environment.base_url + '/EventTelemetry/Destroy?p_eventtelemetry_oid=' + id);
  }
}
