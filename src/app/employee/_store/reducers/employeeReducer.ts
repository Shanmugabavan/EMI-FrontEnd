import {createReducer, on} from '@ngrx/store';
import * as employeeActions from '../actions/employeeActions';
import {state} from '@angular/animations';

export interface EmployeeState {
  employee: any;
  loading: boolean;
  error: any;
}

export const initialState: EmployeeState = {
  employee: null,
  loading: false,
  error: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(employeeActions.addEmployee, (state, {employee}) => ({ ...state, employee, loading: true })),
  on(employeeActions.addEmployeeSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(employeeActions.addEmployeeFail, (state, { error }) => ({ ...state, loading: false, error })),
  on(employeeActions.editEmployee, (state, {id, employee}) => ({...state, employee, loading: true})),
  on(employeeActions.editEmployeeSuccess, (state) => ({...state, loading: false, error: null})),
  on(employeeActions.editEmployeeFail, (state, {error}) => ({...state, loading: false, error}))
);
