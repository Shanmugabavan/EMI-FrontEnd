import {Component, OnDestroy, OnInit} from '@angular/core';
import {Employee} from '../_shared/_models/Employee';
import {Observable, Subscription} from 'rxjs';
import {EmployeeService} from './_services/employee.service';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef} from 'ag-grid-community';
import {EmailValidator} from '@angular/forms';
import {Store} from '@ngrx/store';
import {selectEmployees, selectError, selectLoading} from './_store/selectors/employeesSelectors';
import {loadEmployees} from './_store/actions/employeesActions';
import {EditButtonComponent} from './employee-edit/edit-button/edit-button.component';
import {editEmployee} from './_store/actions/employeeActions';

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
      {field: 'isCurrentlyEmployed', editable: true},
      { // Add a new column for the Update button
        headerName: 'Update',
        cellRenderer: EditButtonComponent, // Use the custom cell renderer component
        editable: false,
        maxWidth: 100,
        suppressMenu: true,
        cellRendererParams: {
          onClick: this.onEditButtonClick.bind(this)
        }
      }
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

  onEditButtonClick(params: any) {
    const rowData: Employee = params.data;
    console.log(rowData);
    console.log('Edit button clicked for ID:', rowData.id);
    this.store.dispatch(editEmployee({id: rowData.id, employee: rowData}));
  }
}
