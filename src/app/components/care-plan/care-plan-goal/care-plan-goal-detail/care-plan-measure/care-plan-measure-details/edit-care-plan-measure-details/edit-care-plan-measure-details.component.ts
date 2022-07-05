import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarePlanAdapterComponent } from 'src/app/adapters/care-plan-adapter/care-plan-adapter.component';
import { CarePlanTemplate } from 'src/app/models/Care Plan/care-plan-template';
import { Goal } from 'src/app/models/Care Plan/goal';
import { Measure } from 'src/app/models/Care Plan/measure';
import { Target } from 'src/app/models/Care Plan/target';
import { CarePlanService } from 'src/app/services/care-plan.service';

@Component({
  selector: 'app-edit-care-plan-measure-details',
  templateUrl: './edit-care-plan-measure-details.component.html',
  styleUrls: ['./edit-care-plan-measure-details.component.scss']
})
export class EditCarePlanMeasureDetailsComponent implements OnInit {
  carePlan!:CarePlanTemplate;
  goal!:Goal;
  measure!:Measure;
  isNew:boolean = false;

  idGoal!:number;
  idTarget!:number;

  measureForm = this.fb.group({
    Name:['',Validators.required],
    LOIN:['', Validators.required],
    Description:['',Validators.required]
  })

  get Name() { return this.measureForm.get('Name'); }
  get LOIN() { return this.measureForm.get('LOIN'); }
  get Description() { return this.measureForm.get('Description'); }
  
  constructor(private fb:FormBuilder, private carePlanService:CarePlanService, 
    private router:Router, private activatedRoute: ActivatedRoute, private carePlanAdapter: CarePlanAdapterComponent) { }

  ngOnInit(): void {
    this.carePlan = JSON.parse('' + localStorage.getItem('carePlanDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.idGoal = params['goalId']);
    this.goal = this.carePlan.Goals?.find(goal => goal.Id == this.idGoal)!;

    this.activatedRoute.params.subscribe((params: Params) => this.idTarget = params['targetId']);

    this.measure = JSON.parse('' + localStorage.getItem('measureDetail'));

    //If not exists, create new
    if(this.measure == undefined){
      alert("Creating new measure, fill in the fields");
      this.isNew = true;
      this.initDefaults();
    }

    this.measureForm.setValue({Name: this.measure.Name, LOIN: this.measure.LOINCcode, Description: this.measure.Description});
  }

  initDefaults(){
    this.measure = {
      Id: 0,
      Name: "",
      LOINCcode: "",
      Description: "",
      TelemetriesMeasure: []
    }
  }

  editMeasure(){
    this.measure.Name = this.measureForm.get('Name')?.value;
    this.measure.LOINCcode = this.measureForm.get('LOIN')?.value;
    this.measure.Description = this.measureForm.get('Description')?.value;

    if(this.isNew){
      this.carePlanService.createMeasure(this.carePlanAdapter.newMeasure(this.measure)).subscribe({
        next : result =>{
          this.measure = result;
        },
        error : error => {
          alert("Failed to create measure: " + error);
        },
        complete : () => {
          this.addMeasureToTarget(this.measure.Id);
        }
      });
    }
    else{
      this.carePlanService.updateMeasure(this.measure.Id, this.carePlanAdapter.newMeasure(this.measure)).subscribe({
        next : result =>{
          console.log(result);
        },
        error : error => {
          alert("Failed to save changes: " + error);
        },
        complete : () => {
          localStorage.setItem('measureDetail',JSON.stringify(this.measure));
          this.router.navigateByUrl("CarePlan/" + this.carePlan.Id);
          alert("Changes saved");
        }
      });
    }
  }

  addMeasureToTarget(idMeasure: number){
    this.carePlanService.updateTargetMeasure(this.carePlan.Id, this.idGoal, this.idTarget, idMeasure).subscribe({
      next : result =>{
        console.log(result);
      },
      error : error => {
        alert("Failed to create add measure to target: " + error);
      },
      complete : () => {
        localStorage.setItem('measureDetail',JSON.stringify(this.measure));
        this.router.navigateByUrl("CarePlan/" + this.carePlan.Id);
        alert("New measure created");
      }
    });
  }

  cancelMeasure(){
    this.router.navigateByUrl("CarePlan/ " + this.carePlan.Name + "/Goal/" + this.idGoal);
  }
}