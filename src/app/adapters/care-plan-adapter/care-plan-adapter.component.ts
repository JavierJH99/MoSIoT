import { Component, OnInit } from '@angular/core';
import { CareActivity } from 'src/app/models/Care Plan/care-activity';
import { CarePlanTemplate } from 'src/app/models/Care Plan/care-plan-template';
import { NewCareActivity } from 'src/app/models/Care Plan/new-care-activity';
import { NewCarePlan } from 'src/app/models/Care Plan/new-care-plan';

@Component({
  selector: 'app-care-plan-adapter',
  templateUrl: './care-plan-adapter.component.html',
  styleUrls: ['./care-plan-adapter.component.scss']
})
export class CarePlanAdapterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newCarePlan(carePlan: CarePlanTemplate): NewCarePlan{
    let newCarePlan: NewCarePlan;

    newCarePlan = {
      PatientProfile_oid: carePlan.Patient?.Id,
      Title: carePlan.Title,
      Description: carePlan.Description,
      DurationDays: carePlan.DurationDays,
      Intent: carePlan.Intent,
      Modified: carePlan.Modified,
      Name: carePlan.Name,
      Status: carePlan.Status
    }

    return newCarePlan;
  }

  newCareActivity(careActivity: CareActivity, idCarePlanTemplate: number): NewCareActivity{
    let newCareActivity: NewCareActivity;

    newCareActivity = {
      CarePlanTemplate_oid: idCarePlanTemplate,
      Name: careActivity.Name,
      Description: careActivity.Description,
      Duration: careActivity.Duration,
      Location: careActivity.Location,
      Periodicity: careActivity.Periodicity,
      TypeActivity: careActivity.TypeActivity,
      ActivityCode: "",
      OutcomeCode: ""
    }

    return newCareActivity;
  }

}
