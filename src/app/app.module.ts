import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { DeviceTemplateComponent } from './components/device-template/device-template.component';
import { DeviceTemplateDetailComponent } from './components/device-template/device-template-detail/device-template-detail.component';

import { PatientDetailComponent } from "./components/patient-profile/patient-detail/patient-detail.component";
import { PatientProfileComponent } from "./components/patient-profile/patient-profile.component";

import { DeviceProfileComponent } from './components/device-template/device-profile/device-profile.component';
import { DeviceTelemetryComponent } from './components/device-template/device-telemetry/device-telemetry.component';
import { DevicePropertyComponent } from './components/device-template/device-property/device-property.component';
import { DeviceCommandComponent } from './components/device-template/device-command/device-command.component';
import { DeviceTelemetryDetailComponent } from './components/device-template/device-telemetry/device-telemetry-detail/device-telemetry-detail.component';
import { DevicePropertyDetailComponent } from './components/device-template/device-property/device-property-detail/device-property-detail.component';
import { DeviceCommandDetailComponent } from './components/device-template/device-command/device-command-detail/device-command-detail.component';

import { PatientSubDetailComponent } from "./components/patient-profile/patient-sub-detail/patient-sub-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { TableComponent } from './components/shared/table/table.component';
import { EditDeviceProfileComponent } from './components/device-template/device-profile/edit-device-profile/edit-device-profile.component';
import { CatchErrorInterceptor } from './interceptors/catch-error.interceptor';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { EditDeviceTelemetryComponent } from './components/device-template/device-telemetry/device-telemetry-detail/edit-device-telemetry/edit-device-telemetry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DeviceTemplateDetailComponent,
    DeviceTemplateComponent,
    PatientProfileComponent,
    PatientDetailComponent,
    DeviceProfileComponent,
    DeviceTelemetryComponent,
    DevicePropertyComponent,
    DeviceCommandComponent,
    DeviceTelemetryDetailComponent,
    DevicePropertyDetailComponent,
    DeviceCommandDetailComponent,
    PatientSubDetailComponent,
    LoginComponent,
    TableComponent,
    EditDeviceProfileComponent,
    ConfirmationDialogComponent,
    EditDeviceTelemetryComponent
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
    {provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
