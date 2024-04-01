import { createSelector, createFeatureSelector } from '@ngrx/store';
import {EmployeesState} from '../reducers/employeesReducer';

export const selectEmployeesState = createFeatureSelector<EmployeesState>('employees');

export const selectEmployees = createSelector(
  selectEmployeesState,
  (state) => state.employees
);

export const selectLoading = createSelector(
  selectEmployeesState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectEmployeesState,
  (state) => state.error
);
