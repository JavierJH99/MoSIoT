import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarePlanComponent } from './components/care-plan/care-plan.component';
import { DeviceTemplateComponent } from './components/device-template/device-template.component';
import { DeviceTemplateDetailComponent } from './components/device-template/device-template-detail/device-template-detail.component';

import { DeviceTelemetryDetailComponent } from './components/device-template/device-telemetry/device-telemetry-detail/device-telemetry-detail.component';
import { DevicePropertyDetailComponent } from './components/device-template/device-property/device-property-detail/device-property-detail.component';
import { DeviceCommandDetailComponent } from './components/device-template/device-command/device-command-detail/device-command-detail.component';

import {LoginComponent} from "./components/login/login.component";
import { EditDeviceProfileComponent } from './components/device-template/device-profile/edit-device-profile/edit-device-profile.component';
import { EditDeviceTelemetryComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-device-telemetry.component';
import { EditDevicePropertyComponent } from './components/device-template/device-property/device-property-detail/edit-device-property/edit-device-property.component';
import { EditDeviceCommandComponent } from './components/device-template/device-command/device-command-detail/edit-device-command/edit-device-command.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientProfileDetailComponent } from './components/patient-profile/patient-profile-detail/patient-profile-detail.component';
import { PatientProfileConditionDetailComponent } from './components/patient-profile/patient-profile-condition/patient-profile-condition-detail/patient-profile-condition-detail.component';
import { PatientProfileDisabilityDetailComponent } from './components/patient-profile/patient-profile-disability/patient-profile-disability-detail/patient-profile-disability-detail.component';
import { PatientProfileAccessDetailComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/patient-profile-access-detail.component';

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
    path:'PatientProfile',
    component:PatientProfileComponent
  },
  {
    path:'PatientProfile/:patientProfileId',
    component:PatientProfileDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/Condition/:conditionId',
    component:PatientProfileConditionDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/Disability/:disabilityId',
    component:PatientProfileDisabilityDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId',
    component:PatientProfileAccessDetailComponent
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
    path:'DeviceTemplate/:deviceName/Property/:propertyId/Edit',
    component:EditDevicePropertyComponent
  },
  {
    path:'DeviceTemplate/:deviceName/Command/:commandId',
    component:DeviceCommandDetailComponent
  },
  {
    path:'DeviceTemplate/:deviceName/Command/:commandId/Edit',
    component:EditDeviceCommandComponent
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
