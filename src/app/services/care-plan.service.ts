import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CareActivity } from '../models/Care Plan/care-activity';
import { CarePlanTemplate } from '../models/Care Plan/care-plan-template';
import { NewCareActivity } from '../models/Care Plan/new-care-activity';
import { NewCarePlan } from '../models/Care Plan/new-care-plan';

@Injectable({
  providedIn: 'root'
})
export class CarePlanService {

  constructor(private http: HttpClient) { }

  getAllCarePlanTemplate(){
    return this.http.get<CarePlanTemplate[]>(environment.base_url + '/CarePlanTemplate/ReadAll');
  }

  getCarePlanById(id: number){
    return this.http.get<CarePlanTemplate>(environment.base_url + '/CarePlanTemplate/' + id);
  }

  createCarePlanTemplate(data: NewCarePlan){
    return this.http.post<CarePlanTemplate>(environment.base_url + '/CarePlanTemplate/New_', data);
  }

  createCareActivity(data: NewCareActivity){
    return this.http.post<CareActivity>(environment.base_url + '/CareActivity/New_', data);
  }

  updateCarePlan(id: number, data: CarePlanTemplate){
    return this.http.put(environment.base_url + '/CarePlanTemplate/Modify?idCarePlanTemplate=' + id, data);
  }

  updateCarePlanPatient(idCarePlan: number, idPatient: number){
    return this.http.put(environment.base_url + '/CarePlanTemplate/AddPatientProfile?p_careplantemplate_oid=' + idCarePlan + "&p_patientprofile_oid=" + idPatient, null);
  }

  updateCareActivity(id: number, data: CareActivity){
    return this.http.put(environment.base_url + '/CareActivity/Modify?idCareActivity=' + id, data);
  }

  deleteCarePlan(id:number) {
    return this.http.delete(environment.base_url + '/CarePlanTemplate/Destroy?p_careplantemplate_oid=' + id);
  }

  deleteCareActivity(id:number) {
    return this.http.delete(environment.base_url + '/CareActivity/Destroy?p_careactivity_oid=' + id);
  }

  deleteGoal(id:number) {
    return this.http.delete(environment.base_url + '/Goal/Destroy?p_goal_oid=' + id);
  }

  deleteTarget(id:number) {
    return this.http.delete(environment.base_url + '/Target/Destroy?p_target_oid=' + id);
  }
}
