import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarePlanTemplate } from '../models/Care Plan/care-plan-template';

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

  deleteCarePlan(id:number) {
    return this.http.delete(environment.base_url + '/CarePlanTemplate/Destroy?p_careplantemplate_oid=' + id);
  }
}
