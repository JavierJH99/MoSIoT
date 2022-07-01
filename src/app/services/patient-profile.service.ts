import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccessMode } from '../models/Patient Profile/access-mode';
import { AdaptationRequest } from '../models/Patient Profile/adaptation-request';
import { Condition } from '../models/Patient Profile/condition';
import { Disability } from '../models/Patient Profile/disability';
import { NewAdaptationRequest } from '../models/Patient Profile/new-adaptation-request';
import { NewCondition } from '../models/Patient Profile/new-condition';
import { NewDisability } from '../models/Patient Profile/new-disability';
import { PatientProfile } from '../models/Patient Profile/patient-profile';

@Injectable({
  providedIn: 'root'
})
export class PatientProfileService {

  constructor(private http: HttpClient) { }

  getAllPatientProfile(){
    return this.http.get<PatientProfile[]>(environment.base_url + '/PatientProfile/ReadAll');
  }

  getPatientProfileById(id: number){
    return this.http.get<PatientProfile>(environment.base_url + '/PatientProfile/' + id);
  }

  createPatientProfile(data: PatientProfile){
    return this.http.post<PatientProfile>(environment.base_url + '/PatientProfile/New_', data);
  }

  createCondition(data: NewCondition){
    return this.http.post<Condition>(environment.base_url + '/Condition/New_', data);
  }

  createDisability(data: NewDisability){
    return this.http.post<Disability>(environment.base_url + '/Disability/New_', data);
  }

  createPatientAccessMode(data: AccessMode){
    return this.http.post<AccessMode>(environment.base_url + '/AccessMode/New_', data);
  }

  createPatientAdaptationRequest(data: NewAdaptationRequest){
    return this.http.post<AdaptationRequest>(environment.base_url + '/AdaptationRequest/New_', data);
  }

  updatePatientProfile(id: number, data: PatientProfile){
    return this.http.put(environment.base_url + '/PatientProfile/Modify?idPatientProfile=' + id, data);
  }

  updatePatientCondition(id: number, data: Condition){
    return this.http.put(environment.base_url + '/Condition/Modify?idCondition=' + id, data);
  }

  updatePatientDisability(id: number, data: Disability){
    return this.http.put(environment.base_url + '/Disability/Modify?idDisability=' + id, data);
  }

  updatePatientAccessMode(id: number, data: AccessMode){
    return this.http.put(environment.base_url + '/AccessMode/Modify?idAccessMode=' + id, data);
  }

  updatePatientAdaptationRequest(id: number, data: AdaptationRequest){
    return this.http.put(environment.base_url + '/AdaptationRequest/Modify?idAdaptationRequest=' + id, data);
  }

  deletePatientProfile(id:number) {
    return this.http.delete(environment.base_url + '/PatientProfile/Destroy?p_patientprofile_oid=' + id);
  }

  deleteCondition(id:number) {
    return this.http.delete(environment.base_url + '/Condition/Destroy?p_condition_oid=' + id);
  }

  deleteDisability(id:number) {
    return this.http.delete(environment.base_url + '/Disability/Destroy?p_disability_oid=' + id);
  }

  deleteAdaptationRequest(id:number) {
    return this.http.delete(environment.base_url + '/AdaptationRequest/Destroy?p_adaptationrequest_oid=' + id);
  }

  deleteAdaptationType(id:number) {
    return this.http.delete(environment.base_url + '/AdaptationTypeRequired/Destroy?p_adaptationtyperequired_oid=' + id);
  }

  deleteAdaptationDetail(id:number) {
    return this.http.delete(environment.base_url + '/AdaptationDetailRequired/Destroy?p_adaptationdetailrequired_oid=' + id);
  }
}
