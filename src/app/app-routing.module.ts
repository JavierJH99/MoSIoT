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
import { EditPatientProfileDetailsComponent } from './components/patient-profile/patient-profile-details/edit-patient-profile-details/edit-patient-profile-details.component';
import { EditPatientProfileConditionComponent } from './components/patient-profile/patient-profile-condition/patient-profile-condition-detail/edit-patient-profile-condition/edit-patient-profile-condition.component';
import { EditPatientProfileDisabilityComponent } from './components/patient-profile/patient-profile-disability/patient-profile-disability-detail/edit-patient-profile-disability/edit-patient-profile-disability.component';
import { EditPatientProfileAccessModeComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/edit-patient-profile-access-mode.component';
import { EditPatientProfileAdaptationRequestComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/edit-patient-profile-adaptation-request/edit-patient-profile-adaptation-request.component';
import { CreatePatientProfileAdapatationRequestComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/create-patient-profile-adapatation-request/create-patient-profile-adapatation-request.component';
import { CreatePatientProfileAdaptationTypeComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/create-patient-profile-adaptation-type/create-patient-profile-adaptation-type.component';
import { EditPatientProfileAdaptationTypeComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/edit-patient-profile-adaptation-type/edit-patient-profile-adaptation-type.component';
import { CreatePatientProfileAdaptationDetailComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/create-patient-profile-adaptation-detail/create-patient-profile-adaptation-detail.component';
import { EditPatientProfileAdaptationDetailComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/edit-patient-profile-adaptation-detail/edit-patient-profile-adaptation-detail.component';

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
    path:'PatientProfile/:patientProfileName/EditDetails',
    component:EditPatientProfileDetailsComponent
  },
  {
    path:'PatientProfile/:patientProfileName/Condition/:conditionId',
    component:PatientProfileConditionDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/Condition/:conditionId/Edit',
    component:EditPatientProfileConditionComponent
  },
  {
    path:'PatientProfile/:patientProfileName/Disability/:disabilityId',
    component:PatientProfileDisabilityDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/Disability/:disabilityId/Edit',
    component:EditPatientProfileDisabilityComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId',
    component:PatientProfileAccessDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/Edit',
    component:EditPatientProfileAccessModeComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/AdaptationRequest/:adaptationRequestId/Edit',
    component:EditPatientProfileAdaptationRequestComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/AdaptationRequest/New',
    component:CreatePatientProfileAdapatationRequestComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/AdaptationType/:adaptationTypeId/Edit',
    component:EditPatientProfileAdaptationTypeComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/AdaptationType/New',
    component: CreatePatientProfileAdaptationTypeComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/AdaptationDetail/:adaptationDetailId/Edit',
    component:EditPatientProfileAdaptationDetailComponent
  },
  {
    path:'PatientProfile/:patientProfileName/AccessMode/:accessModeId/AdaptationDetail/New',
    component:CreatePatientProfileAdaptationDetailComponent
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
