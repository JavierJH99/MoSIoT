import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/models/Patient Profile/condition';
import { NewCondition } from 'src/app/models/Patient Profile/new-condition';

@Component({
  selector: 'app-condition-adapter',
  templateUrl: './condition-adapter.component.html',
  styleUrls: ['./condition-adapter.component.scss']
})
export class ConditionAdapterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newCondition(condition: Condition, patientId: number): NewCondition{
    let newCondition:NewCondition;

    newCondition = {
      PatientProfile_oid: patientId,
      ClinicalStatus: condition.ClinicalStatus,
      Description: condition.Description,
      Disease: condition.Disease,
      Name: condition.Name
    }

    return newCondition;
  }
}
