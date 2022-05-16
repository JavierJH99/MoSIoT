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
import { EditDeviceSpecificTelemtryComponent } from './components/device-template/device-telemetry/device-telemetry-detail/device-specific-telemtry/edit-device-specific-telemtry/edit-device-specific-telemtry.component';
import { EditDeviceProfileComponent } from './components/device-template/device-profile/edit-device-profile/edit-device-profile.component';
//#endregion Device
//#region Pipes
import { LanguagePipe } from './pipes/language.pipe';
import { SeverityPipe } from './pipes/severity.pipe';
import { TelemetryTypePipe } from './pipes/telemetry-type.pipe';
import { TelemetryUnitTypePipe } from './pipes/telemetry-unit-type.pipe';
import { BooleanToStringPipe } from './pipes/boolean-to-string.pipe';
import { DeviceTypePipe } from './pipes/device-type.pipe';
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
    EditDeviceSpecificTelemtryComponent,
    SeverityPipe,
    TelemetryTypePipe,
    TelemetryUnitTypePipe,
    BooleanToStringPipe,
    DeviceTypePipe
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
    {provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }