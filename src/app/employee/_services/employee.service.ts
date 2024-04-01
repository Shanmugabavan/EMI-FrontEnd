import {Employee} from '../../_shared/_models/Employee';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [
    new Employee('1', 'Shanmu', 'shanmu@gmail.com', true),
    new Employee('1', 'Shanmu', 'shanmu@gmail.com', true),
  ];

  employeesChanged = new Subject<Employee[]>();
  startedEditing = new Subject<number>();

  getEmployees() {
    console.log("Employees: ", this.employees);
    return this.employees.slice();
  }

  getEmployee(index: number) {
    return this.employees[index];
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.employeesChanged.next(this.employees.slice());
  }

  updateEmployee(index: number, newEmployee: Employee) {
    this.employees[index] = newEmployee;
    this.employeesChanged.next(this.employees.slice());
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.employeesChanged.next(this.employees.slice());
  }

  setEmployees(employees: Employee[]){
    console.log("setEmployees:", employees)
    this.employees = employees;
  }
}
