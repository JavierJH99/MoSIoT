import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'patient-sub-detail',
  templateUrl: './patient-sub-detail.component.html',
  styleUrls: ['./patient-sub-detail.component.scss']
})
export class PatientSubDetailComponent implements OnInit {

  @Input() title: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.title = params['title']
    });
  }

}
