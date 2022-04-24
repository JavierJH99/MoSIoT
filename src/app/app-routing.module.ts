import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { CarePlanComponent } from './components/care-plan/care-plan.component';
import { DeviceTemplateComponent } from './components/device-template/device-template.component';
import {PatientDetailComponent} from "./components/patient-profile/patient-detail/patient-detail.component";
import { DeviceTemplateDetailComponent } from './components/device-template/device-template-detail/device-template-detail.component';

import { DeviceTelemetryDetailComponent } from './components/device-template/device-telemetry/device-telemetry-detail/device-telemetry-detail.component';
import { DevicePropertyDetailComponent } from './components/device-template/device-property/device-property-detail/device-property-detail.component';
import { DeviceCommandDetailComponent } from './components/device-template/device-command/device-command-detail/device-command-detail.component';

import {PatientSubDetailComponent} from "./components/patient-profile/patient-sub-detail/patient-sub-detail.component";
import {LoginComponent} from "./components/login/login.component";
import { EditDeviceProfileComponent } from './components/device-template/device-profile/edit-device-profile/edit-device-profile.component';
import { EditDeviceTelemetryComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-device-telemetry.component';

const routes: Routes = [
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'DeviceTemplate',
    component:DeviceTemplateComponent
  },
  {
    path:'DeviceTemplate/:deviceId',
    component:DeviceTemplateDetailComponent
  },
  {
    path:'DeviceTemplate/:deviceName/EditProfile',
    component:EditDeviceProfileComponent
  },
  {
    path:'DeviceTemplate/:deviceName/Telemetry/:telemetryId',
    component:DeviceTelemetryDetailComponent
  },
  {
    path:'DeviceTemplate/:deviceName/Telemetry/:telemetryId/Edit',
    component:EditDeviceTelemetryComponent
  },
  {
    path:'DeviceTemplate/:deviceName/Property/:propertyId',
    component:DevicePropertyDetailComponent
  },
  {
    path:'DeviceTemplate/:deviceName/Command/:commandId',
    component:DeviceCommandDetailComponent
  },
  {
    path:'PatientProfile',
    component:PatientProfileComponent
  },
  {
    path:'PatientProfile/:title',
    component:PatientDetailComponent
  },
  {
    path:'PatientProfile/:title/:title',
    component:PatientSubDetailComponent
  },
  {
    path:'CarePlan',
    component:CarePlanComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'Home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution:'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
