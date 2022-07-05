import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeviceTemplate } from 'src/app/models/Device Template/device-template';
import { Telemetry } from 'src/app/models/Device Template/telemetry';

@Component({
  selector: 'edit-telemetry-specific',
  templateUrl: './edit-telemetry-specific.component.html',
  styleUrls: ['./edit-telemetry-specific.component.scss']
})
export class EditTelemetrySpecificComponent implements OnInit {
  deviceTemplate!:DeviceTemplate;
  telemetry!:Telemetry;
  idTelemetry!:number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deviceTemplate = JSON.parse('' + localStorage.getItem('deviceDetail'));
    this.activatedRoute.params.subscribe((params: Params) => this.idTelemetry = params['telemetryId']);
    this.telemetry = this.deviceTemplate.Telemetries?.find(telemetry => telemetry.Id = this.idTelemetry)!;

    if(this.telemetry == null){
      alert("There is a problem with the telemtry, try it later");
      this.router.navigateByUrl("/DeviceTemplate/" + this.deviceTemplate.Id);
    }
  }
}
