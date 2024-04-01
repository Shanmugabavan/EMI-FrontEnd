import {createAction, props} from '@ngrx/store';
import {Employee} from '../../../_shared/_models/Employee';

//Load Employees
export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction('[Employee] Load Employees Success', props<{employees: Employee[]}>());
export const loadEmployeesFail = createAction('[Employee] Load Employees Failure', props<{error: string}>());
