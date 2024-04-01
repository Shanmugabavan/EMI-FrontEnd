import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {EmployeeService} from './employee/_services/employee.service';
import {AgGridAngular, AgGridModule} from 'ag-grid-angular';
import {EmployeesEffects} from './employee/_store/effects/employeesEffects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {employeesReducer} from './employee/_store/reducers/employeesReducer';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import {employeeReducer} from './employee/_store/reducers/employeeReducer';
import {EmployeeEffects} from './employee/_store/effects/employeeEffects';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    HeaderComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule,
    AgGridAngular,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({employees: employeesReducer, employee: employeeReducer}, {}),
    EffectsModule.forRoot([EmployeesEffects, EmployeeEffects]),
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
