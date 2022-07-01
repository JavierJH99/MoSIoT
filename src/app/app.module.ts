//#region Utilities
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from "./components/login/login.component";
import { CatchErrorInterceptor } from './interceptors/catch-error.interceptor';
//#endregion Utilities
//#region Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
//#endregion Angular Material
//#region Shared
import { TableComponent } from './components/shared/table/table.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
//#endregion Shared
//#region Patient
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientProfileDetailComponent } from './components/patient-profile/patient-profile-detail/patient-profile-detail.component';
import { PatientProfileDetailsComponent } from './components/patient-profile/patient-profile-details/patient-profile-details.component';
import { PatientProfileConditionComponent } from './components/patient-profile/patient-profile-condition/patient-profile-condition.component';
import { PatientProfileDisabilityComponent } from './components/patient-profile/patient-profile-disability/patient-profile-disability.component';
import { PatientProfileAccessModeComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-mode.component';
import { PatientProfileConditionDetailComponent } from './components/patient-profile/patient-profile-condition/patient-profile-condition-detail/patient-profile-condition-detail.component';
import { PatientProfileDisabilityDetailComponent } from './components/patient-profile/patient-profile-disability/patient-profile-disability-detail/patient-profile-disability-detail.component';
import { PatientProfileAccessDetailComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/patient-profile-access-detail.component';
//#endregion Patient
//#region Device
import { DeviceTemplateComponent } from './components/device-template/device-template.component';
import { DeviceTemplateDetailComponent } from './components/device-template/device-template-detail/device-template-detail.component';
import { DeviceProfileComponent } from './components/device-template/device-profile/device-profile.component';
import { DeviceTelemetryComponent } from './components/device-template/device-telemetry/device-telemetry.component';
import { DevicePropertyComponent } from './components/device-template/device-property/device-property.component';
import { DeviceCommandComponent } from './components/device-template/device-command/device-command.component';
import { DeviceTelemetryDetailComponent } from './components/device-template/device-telemetry/device-telemetry-detail/device-telemetry-detail.component';
import { DevicePropertyDetailComponent } from './components/device-template/device-property/device-property-detail/device-property-detail.component';
import { DeviceCommandDetailComponent } from './components/device-template/device-command/device-command-detail/device-command-detail.component';
import { EditDeviceTelemetryComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-device-telemetry.component';
import { EditDevicePropertyComponent } from './components/device-template/device-property/device-property-detail/edit-device-property/edit-device-property.component';
import { EditDeviceCommandComponent } from './components/device-template/device-command/device-command-detail/edit-device-command/edit-device-command.component';
import { DeviceSpecificTelemtryComponent } from './components/device-template/device-telemetry/device-telemetry-detail/device-specific-telemtry/device-specific-telemtry.component';
import { EditDeviceProfileComponent } from './components/device-template/device-profile/edit-device-profile/edit-device-profile.component';
//#endregion Device
//#region Pipes
import { LanguagePipe } from './pipes/language.pipe';
import { SeverityPipe } from './pipes/Device/severity.pipe';
import { TelemetryTypePipe } from './pipes/Device/telemetry-type.pipe';
import { TelemetryUnitTypePipe } from './pipes/Device/telemetry-unit-type.pipe';
import { BooleanToStringPipe } from './pipes/boolean-to-string.pipe';
import { DeviceTypePipe } from './pipes/Device/device-type.pipe';
import { AccessModeTypePipe } from './pipes/PatientProfile/access-mode-type.pipe';
import { AdaptationTypePipe } from './pipes/PatientProfile/adaptation-type.pipe';
import { AdaptationDetailPipe } from './pipes/PatientProfile/adaptation-detail.pipe';
import { HazardValuePipe } from './pipes/PatientProfile/hazard-value.pipe';
import { UpperCasePipe } from '@angular/common';
import { DisabilityTypePipe } from './pipes/PatientProfile/disability-type.pipe';
import { PatientSeverityPipe } from './pipes/PatientProfile/patient-severity.pipe';
import { SchemaTypePipe } from './pipes/Device/schema-type.pipe';
import { EditTelemetryStateComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-telemetry-state/edit-telemetry-state.component';
import { EditTelemetryEventComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-telemetry-event/edit-telemetry-event.component';
import { EditTelemetryLocationComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-telemetry-location/edit-telemetry-location.component';
import { EditTelemetrySensorComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-telemetry-sensor/edit-telemetry-sensor.component';
import { ClinicalStatusPipe } from './pipes/PatientProfile/clinical-status.pipe';
import { DiseaseTypePipe } from './pipes/PatientProfile/disease-type.pipe';
import { EditPatientProfileDetailsComponent } from './components/patient-profile/patient-profile-details/edit-patient-profile-details/edit-patient-profile-details.component';
import { EditPatientProfileConditionComponent } from './components/patient-profile/patient-profile-condition/patient-profile-condition-detail/edit-patient-profile-condition/edit-patient-profile-condition.component';
import { EditPatientProfileDisabilityComponent } from './components/patient-profile/patient-profile-disability/patient-profile-disability-detail/edit-patient-profile-disability/edit-patient-profile-disability.component';
import { EditPatientProfileAccessModeComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/edit-patient-profile-access-mode.component';
import { EditPatientProfileAdaptationRequestComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/edit-patient-profile-adaptation-request/edit-patient-profile-adaptation-request.component';
import { CreatePatientProfileAdapatationRequestComponent } from './components/patient-profile/patient-profile-access-mode/patient-profile-access-detail/edit-patient-profile-access-mode/create-patient-profile-adapatation-request/create-patient-profile-adapatation-request.component';
import { PatientProfileAdapterComponent } from './adapters/patient-profile-adapter/patient-profile-adapter.component';
import { DeviceTemplateAdapterComponent } from './adapters/device-template-adapter/device-template-adapter.component';
//#endregion Pipes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DeviceTemplateDetailComponent,
    DeviceTemplateComponent,
    DeviceProfileComponent,
    DeviceTelemetryComponent,
    DevicePropertyComponent,
    DeviceCommandComponent,
    DeviceTelemetryDetailComponent,
    DevicePropertyDetailComponent,
    DeviceCommandDetailComponent,
    LoginComponent,
    TableComponent,
    EditDeviceProfileComponent,
    ConfirmationDialogComponent,
    EditDeviceTelemetryComponent,
    EditDevicePropertyComponent,
    EditDeviceCommandComponent,
    PatientProfileComponent,
    PatientProfileDetailComponent,
    PatientProfileDetailsComponent,
    PatientProfileConditionComponent,
    PatientProfileDisabilityComponent,
    PatientProfileAccessModeComponent,
    PatientProfileConditionDetailComponent,
    PatientProfileDisabilityDetailComponent,
    PatientProfileAccessDetailComponent,
    LanguagePipe,
    DeviceSpecificTelemtryComponent,
    SeverityPipe,
    TelemetryTypePipe,
    TelemetryUnitTypePipe,
    BooleanToStringPipe,
    DeviceTypePipe,
    AccessModeTypePipe,
    AdaptationTypePipe,
    AdaptationDetailPipe,
    HazardValuePipe,
    DisabilityTypePipe,
    PatientSeverityPipe,
    SchemaTypePipe,
    EditTelemetryStateComponent,
    EditTelemetryEventComponent,
    EditTelemetryLocationComponent,
    EditTelemetrySensorComponent,
    ClinicalStatusPipe,
    DiseaseTypePipe,
    EditPatientProfileDetailsComponent,
    EditPatientProfileConditionComponent,
    EditPatientProfileDisabilityComponent,
    EditPatientProfileAccessModeComponent,
    EditPatientProfileAdaptationRequestComponent,
    CreatePatientProfileAdapatationRequestComponent,
    PatientProfileAdapterComponent,
    DeviceTemplateAdapterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    SeverityPipe,
    TelemetryTypePipe,
    TelemetryUnitTypePipe,
    LanguagePipe,
    BooleanToStringPipe,
    DeviceTypePipe,
    AccessModeTypePipe,
    HazardValuePipe,
    UpperCasePipe,
    DisabilityTypePipe,
    PatientSeverityPipe,
    SchemaTypePipe,
    ClinicalStatusPipe,
    DiseaseTypePipe,
    PatientProfileAdapterComponent,
    {provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }