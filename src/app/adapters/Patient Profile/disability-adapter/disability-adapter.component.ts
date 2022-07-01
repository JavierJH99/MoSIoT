import { Component, OnInit } from '@angular/core';
import { Disability } from 'src/app/models/Patient Profile/disability';
import { NewDisability } from 'src/app/models/Patient Profile/new-disability';

@Component({
  selector: 'app-disability-adapter',
  templateUrl: './disability-adapter.component.html',
  styleUrls: ['./disability-adapter.component.scss']
})
export class DisabilityAdapterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newDisability(disability: Disability, patientId: number): NewDisability{
    let newDisability:NewDisability;

    newDisability = {
      Patient_oid: patientId,
      Description: disability.Description,
      Name: disability.Name,
      Severity: disability.Severity,
      Type: disability.Type
    }

    return newDisability;
  }

}
