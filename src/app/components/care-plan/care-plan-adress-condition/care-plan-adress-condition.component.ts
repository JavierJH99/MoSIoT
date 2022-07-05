import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarePlanTemplate } from 'src/app/models/Care Plan/care-plan-template';
import { Condition } from 'src/app/models/Patient Profile/condition';
import { CarePlanService } from 'src/app/services/care-plan.service';
import { PatientProfileService } from 'src/app/services/patient-profile.service';

@Component({
  selector: 'care-plan-adress-condition',
  templateUrl: './care-plan-adress-condition.component.html',
  styleUrls: ['./care-plan-adress-condition.component.scss']
})
export class CarePlanAdressConditionComponent implements OnInit {
  carePlan!:CarePlanTemplate;
  carePlans!:CarePlanTemplate[];
  newCondition:boolean = false;

  conditions!:Condition[];

  adressConditionForm = this.fb.group({
    Condition:['',Validators.required]
  })

  get Condition() { return this.adressConditionForm.get('Condition'); }
  
  constructor(private fb:FormBuilder, private carePlanService:CarePlanService, private patientProfileService: PatientProfileService, private router:Router) { }

  ngOnInit(): void {
    this.carePlans = JSON.parse('' + localStorage.getItem('carePlanTemplates'));
    this.carePlan = JSON.parse('' + localStorage.getItem('carePlanDetail'));

    this.getConditions();
  }

  addAdressCondition(){
    this.newCondition = true;
  }

  editAdressCondition(){
    let idCondition:number[] = this.adressConditionForm.get('Condition')?.value;

    idCondition = this.deleteDuplicates(idCondition);

    if(idCondition != []){
      this.carePlanService.updateCarePlanAdressCondition(this.carePlan.Id,idCondition).subscribe({
        next : result =>{
          console.log(result);
        },
        error : error => {
          alert("Failed to add condition: " + error);
        },
        complete : () => {
          window.location.reload();
          alert("Condition added");
        }
      });
    }
  }

  cancelAdressCondition(){
    this.newCondition = false;
  }

  getConditions(){
    this.patientProfileService.getAllCondition().subscribe({
      next: result => {
        this.conditions = result;
      },
      error: error => {
        alert("There was a problem getting the conditions: " + error); 
      },
      complete: () => { }
    })
  }

  deleteDuplicates(newConditionsId:number[]){
    newConditionsId.forEach(newCondition => {
      this.carePlan.AddressConditions?.find(condition => {
        if(condition.Id == newCondition){
          newConditionsId.splice(newConditionsId.indexOf(newCondition),1);
        }
      })
    });
    return newConditionsId;
  }

  removeCondition(idCondition:number){
    this.carePlan.AddressConditions?.splice(this.carePlan.AddressConditions?.map(condition => condition.Id).indexOf(idCondition),1);

    this.carePlanService.updateCarePlan(this.carePlan.Id,this.carePlan).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to save changes: " + error);
      },
      complete : () => {
        localStorage.setItem('carePlanDetail',JSON.stringify(this.carePlan));
        this.router.navigateByUrl("CarePlan/ " + this.carePlan.Id);
        alert("Changes saved");
      }
    });
  }

  details(id:number){
    this.router.navigate(["CarePlan/" + this.carePlan.Name + "/AdressCondition/" + id]);
  }
}
