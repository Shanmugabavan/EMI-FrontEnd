import {createAction, props} from '@ngrx/store';
import {Employee} from '../../../_shared/_models/Employee';

export const addEmployee = createAction('[Employee] Add Employee', props<{ employee: Employee}>());
export const addEmployeeSuccess = createAction('[Employee] Add Employee Success', props<{ success: string}>());
export const addEmployeeFail = createAction('[Employee] Add Employee Failure', props<{ error: string}>());
