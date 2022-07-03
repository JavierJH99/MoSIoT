import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarePlanTemplate } from 'src/app/models/Care Plan/care-plan-template';
import { CarePlanService } from 'src/app/services/care-plan.service';

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.component.html',
  styleUrls: ['./care-plan.component.scss']
})
export class CarePlanComponent implements OnInit {
  carePlans!: CarePlanTemplate[];
  cargando!:boolean;

  constructor(private router: Router, private carePlanService: CarePlanService) { }

  ngOnInit(): void {
    this.cargando = true;
    this.carePlanService.getAllCarePlanTemplate().subscribe({
      next: result => {
        this.carePlans = result;
      },
      error: error => {
        this.cargando = false;
        alert("There was a problem getting the devices: " + error); 
      },
      complete: () => {
        localStorage.setItem('carePlanTemplates',JSON.stringify(this.carePlans));
        this.cargando = false;
      }
    })
  }

  details(id:number){
    console.log("Details id: " + id);
    this.router.navigate(["CarePlan/" + id]);
  }

  createCarePlan(){
    let carePlan:CarePlanTemplate = {
      Id: -999,
      Description: "",
      DurationDays: 1,
      Intent: 1,
      Name: "",
      Status: 1,
      Title: "",
      Modified: new Date()
    }
    
    localStorage.setItem('carePlanDetail',JSON.stringify(carePlan));
    this.router.navigateByUrl("CarePlan/NewCarePlan/EditDetails");
  }
}
