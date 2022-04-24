import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeviceTemplate } from '../models/device-template';
import { environment } from 'src/environments/environment';
import { Telemetry } from '../models/telemetry';

@Injectable({
  providedIn: 'root'
})
export class DeviceTemplateService {
  constructor(private http: HttpClient) { }

  getAllDeviceTemplate(){
    return this.http.get<DeviceTemplate[]>(environment.base_url + '/DeviceTemplate/ReadAll');
  }

  getDeviceTemplateById(id: number){
    return this.http.get<DeviceTemplate>(environment.base_url + '/DeviceTemplate/' + id);
  }

  updateDeviceTemplate(id: number, data: DeviceTemplate){
    return this.http.put(environment.base_url + '/DeviceTemplate/Modify?idDeviceTemplate=' + id, data);
  }

  deleteDeviceTemplate(id:number) {
    return this.http.delete(environment.base_url + '/DeviceTemplate/Destroy?p_devicetemplate_oid=' + id);
  }

  updateDeviceTelemetry(id: number, data: Telemetry){
    return this.http.put(environment.base_url + '/Telemetry/Modify?idTelemetry=' + id, data);
  }
}
