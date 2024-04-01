import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as employeeActions from '../actions/employeesActions';
import {ApiService} from '../../_services/ApiService';
import {EmployeeService} from '../../_services/employee.service';


@Injectable()
export class EmployeesEffects {
  getItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.loadEmployees),
      switchMap(() =>
        this.apiService.getEmployees().pipe(
          map((employees) => employeeActions.loadEmployeesSuccess({ employees })),
          catchError((error) => of(employeeActions.loadEmployeesFail({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
