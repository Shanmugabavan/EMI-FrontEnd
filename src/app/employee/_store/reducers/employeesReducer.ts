import {createReducer, on} from '@ngrx/store';
import * as EmployeeActions from '../actions/employeesActions';

export interface EmployeesState{
  employees: any[];
  loading: boolean;
  error: any;
}

export const initialState: EmployeesState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeesReducer = createReducer(
  initialState,
  on(
    EmployeeActions.loadEmployees,
    (state) => ({
      ...state,
      loading: true
    })),
  on(
    EmployeeActions.loadEmployeesSuccess,
    (state, { employees }) => ({
      ...state,
      employees: employees,
      loading: false,
      error: null
    })),
  on(EmployeeActions.loadEmployeesFail,
    (state, { error }) => ({
      ...state,
      loading: false,
      error
    })),
);
