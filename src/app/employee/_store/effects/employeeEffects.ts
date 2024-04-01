import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as employeeActions from '../actions/employeeActions';
import {EmployeeService} from '../../_services/employee.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ApiService} from '../../_services/ApiService';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeEffects{
  constructor(private actions$: Actions, private apiService: ApiService) {}

  AddItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.addEmployee),
      switchMap((action) =>
        this.apiService.addEmployee(action.employee).pipe(
          map((success) => employeeActions.addEmployeeSuccess({ success })),
          catchError((error) => of(employeeActions.addEmployeeFail({ error })))
        )
      )
    )
  );

    editEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(employeeActions.editEmployee),
            switchMap((action) =>
                this.apiService.editEmployee(action.id, action.employee).pipe(
                    map((success) => employeeActions.editEmployeeSuccess({ success })),
                    catchError((error) => of(employeeActions.editEmployeeFail({ error })))
                )
            )
        )
    );
}
