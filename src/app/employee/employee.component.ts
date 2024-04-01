import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employee} from '../_shared/_models/Employee';
import {Subscription} from 'rxjs';
import {EmployeeService} from './_services/employee.service';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef} from 'ag-grid-community';
import {EmailValidator} from '@angular/forms';
import {Store} from '@ngrx/store';
import {selectEmployees, selectError, selectLoading} from './_store/selectors/employeesSelectors';
import {loadEmployees} from './_store/actions/employeesActions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  employees: Employee[];
  private idChangeSub: Subscription;
  colDefs: ColDef[] = [];

  employees$ = this.store.select(selectEmployees);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  private employeeSubscription: Subscription | undefined;



  constructor(private employeeService: EmployeeService, private store: Store) {
  }
  ngOnInit(): void {
    this.colDefs = [
      {field: 'id'},
      {field: 'name', editable: true},
      {field: 'email', editable: true},
      {field: 'isCurrentlyEmployed', editable: true}
    ];
    this.employees = this.employeeService.getEmployees();
    this.idChangeSub = this.employeeService.employeesChanged
      .subscribe((employees1: Employee[]) =>
        this.employees = employees1
      );

    this.store.dispatch(loadEmployees());
    this.employeeSubscription = this.store.select(selectEmployees).subscribe((employees) => {
      this.employeeService.setEmployees(employees);
      this.employees = this.employeeService.getEmployees();
    });
  }

  ngOnDestroy() {
    this.idChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.employeeService.startedEditing.next(index);
  }
}
