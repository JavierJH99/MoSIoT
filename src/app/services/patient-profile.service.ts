import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PatientProfile } from '../models/patient-profile';

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

  updatePatientProfile(id: number, data: PatientProfile){
    return this.http.put(environment.base_url + '/PatientProfile/Modify?idPatientProfile=' + id, data);
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
}
