import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarePlanTemplate } from 'src/app/models/Care Plan/care-plan-template';

@Component({
  selector: 'care-plan-adress-condition',
  templateUrl: './care-plan-adress-condition.component.html',
  styleUrls: ['./care-plan-adress-condition.component.scss']
})
export class CarePlanAdressConditionComponent implements OnInit {
  carePlan!:CarePlanTemplate;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carePlan = JSON.parse('' + localStorage.getItem('carePlanDetail'));
  }

  details(id:number){
    this.router.navigate(["CarePlan/" + this.carePlan.Name + "/AdressCondition/" + id]);
  }

  createAdressCondition(){
    this.router.navigateByUrl("CarePlan/ " + this.carePlan.Name + "/AdressCondition/" + -999 + "/Edit");
  }
}
