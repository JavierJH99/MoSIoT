import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { CarePlanTemplate } from 'src/app/models/Care Plan/care-plan-template';
import { Goal } from 'src/app/models/Care Plan/goal';
import { TableDataSource } from 'src/app/models/table-data-source';
import { CareStatusPipe } from 'src/app/pipes/CarePlan/care-status.pipe';
import { CategoryGoalPipe } from 'src/app/pipes/CarePlan/category-goal.pipe';
import { PriorityTypePipe } from 'src/app/pipes/CarePlan/priority-type.pipe';
import { CarePlanService } from 'src/app/services/care-plan.service';

@Component({
  selector: 'app-care-plan-goal-detail',
  templateUrl: './care-plan-goal-detail.component.html',
  styleUrls: ['./care-plan-goal-detail.component.scss']
})
export class CarePlanGoalDetailComponent implements OnInit {
  id!:number;
  carePlan!:CarePlanTemplate;
  goal!:Goal;
  tableDetailsDataSource!:TableDataSource[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public dialog: MatDialog, private carePlanService: CarePlanService,
    private categoryGoalPipe: CategoryGoalPipe, private priorityTypePipe: PriorityTypePipe, private careStatusPipe: CareStatusPipe) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => this.id = params['goalId']);
    this.carePlan = JSON.parse('' + localStorage.getItem('carePlanDetail'));
    this.goal = this.carePlan.Goals?.find(goal => goal.Id == this.id)!;

    if(this.goal != null){
      this.loadDetailsTable();
    }
  }

  editGoal(){
    this.router.navigateByUrl("CarePlan/ " + this.carePlan.Name + "/Goal/" + this.goal.Id + "/Edit");
  }

  editTarget(idTarget:number){
    alert("Not implemented");
  }

  createTarget(){
    alert("Not implemented");
  }

  removeDialog(name:string, type:number, id?:number){
    let removeConfirm:number = 0;

    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      width: '250px',
      data: name
    });

    dialogRef.afterClosed().subscribe({
      next: result => {
        removeConfirm = result;
      },
      error: error => {
        alert("There was a problem removing: " + error);
        removeConfirm = 0;
      },
      complete: () => {
        if(removeConfirm == 1){
          switch(type){
            case 1:
              this.removeGoal();
              break;
            case 2:
              this.removeTarget(id!);
              break;
            default:
              alert("There was a problem removing");
              break;
          }
        }
      }
    });
  }

  removeGoal(){
    this.carePlanService.deleteGoal(this.goal.Id).subscribe({
      next: result => {
        console.log("Removing goal...");
      },
      error: error => {
        alert("There was a problem removing the goal: " + error);
      },
      complete: () => {
        alert("Goal removed successfully");
        this.router.navigateByUrl("CarePlan/" + this.carePlan.Id);
      }
    })
  }

  removeTarget(idTarget:number){
    this.carePlanService.deleteTarget(idTarget).subscribe({
      next: result => {
        console.log("Removing target...");
      },
      error: error => {
        alert("There was a problem removing the target: " + error);
      },
      complete: () => {
        alert("Target removed successfully");
        this.router.navigateByUrl("CarePlan/" + this.carePlan.Id);
      }
    })
  }

  loadDetailsTable(){
    this.tableDetailsDataSource = [
      {
        Name: "Category",
        Value: this.categoryGoalPipe.transform(this.goal.Category)
      },
      {
        Name: "Description",
        Value: this.goal.Description
      },
      {
        Name: "Priority",
        Value: this.priorityTypePipe.transform(this.goal.Priority)
      },
      {
        Name: "Status",
        Value: this.careStatusPipe.transform(this.goal.Status)
      },
      {
        Name: "Outcome Code",
        Value: this.goal.OutcomeCode
      }
    ]
  }
}
