import { Component } from '@angular/core';
import {Employee} from '../../_shared/_models/Employee';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {addEmployee} from '../_store/actions/employeeActions';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employee: Employee;
  employeeForm: FormGroup;
  isActive: boolean = false;

  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    let id: string = '';
    let name: string = '';
    let email: string = '';
    let active: boolean = this.isActive;

    this.employeeForm = new FormGroup({
      'id': new FormControl(id),
      'name': new FormControl(name),
      'email': new FormControl(email),
      'active': new FormControl(active),
    });
  }

  onSubmit(){
    this.employee = new Employee(
      this.employeeForm.value.id,
      this.employeeForm.value.name,
      this.employeeForm.value.email,
      this.employeeForm.value.active
    );
    console.log(this.employee);
    this.store.dispatch(addEmployee({ employee: this.employee }));

  }
}
